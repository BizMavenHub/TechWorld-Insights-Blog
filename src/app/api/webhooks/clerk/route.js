import { Webhook } from "svix";
import { headers } from "next/headers";

// Actions
import { createUser, deleteUser, updateUser } from "@/lib/actions/user.action";

export async function POST(req) {
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the endpoint
  const WEBHOOK_SECRET =
    process.env.STATUS === "development"
      ? process.env.WEBHOOK_SECRET_DEVELOPMENT
      : process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occured -- no svix headers", {
      status: 400,
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occured", {
      status: 400,
    });
  }

  // Do something with the payload
  // For this guide, you simply log the payload to the console
  const eventType = evt.type;

  console.log("Received event:", eventType, evt.data);

  // Create a new user object and add it to the db
  if (eventType === "user.created") {
    const { id, email_addresses, username, image_url, password_enabled } =
      evt.data;

    if (!id || !email_addresses) {
      return new Response("Error occurred -- missing data", { status: 400 });
    }

    const userObject = {
      clerkUserId: id,
      username: username,
      email: email_addresses[0].email_address,
      passwordEnabled: password_enabled,
      profileImage: image_url,
      emailVerified:
        email_addresses[0].verification.status === "verified" ? true : false,
    };

    const newUser = await createUser(userObject);

    if (!newUser) return new Response("Error: Failed to create");

    return new Response("Successfully created new user");
  }

  // Update user in db
  if (eventType.type === "user.updated") {
    const { id, email_addresses, username, image_url, password_enabled } =
      evt.data;

    if (!id) {
      return new Response("Id is not found", { status: 400 });
    }

    const userObject = {
      clerkUserId: id,
      username: username,
      email: email_addresses[0].email_address,
      passwordEnabled: password_enabled,
      profileImage: image_url,
      emailVerified:
        email_addresses[0].verification.status === "verified" ? true : false,
    };

    const updatedUser = await updateUser(userObject);

    if (!updatedUser) return new Response("Error: Failed to update");

    return new Response("Successfully updated user");
  }

  // Delete user from db
  if (eventType === "user.deleted") {
    const { id } = evt.data;

    if (!id) return new Response("Id is not found");

    await deleteUser(id);

    return new Response("Successfully deleted user", { status: 200 });
  }

  return new Response("", { status: 200 });
}
