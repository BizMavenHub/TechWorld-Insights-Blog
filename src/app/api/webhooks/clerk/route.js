import { Webhook } from "svix";
import { headers } from "next/headers";

// Actions
import { createUser, deleteUser, updateUser } from "@/lib/actions/user.action";

export async function POST(req) {
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the endpoint
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

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

  // Create User
  if (eventType === "user.created") {
    const { id, username, image_url, email_addresses, password_enabled } =
      evt.data;

    if (!id) return new Response("ID is not found", { status: 404 });

    const newUserObj = {
      clerkUserId: id,
      username: username,
      profileImage: image_url,
      email: email_addresses[0].email_address,
      passwordEnabled: password_enabled,
      emailVerified:
        email_addresses[0].verification.status === "verified" ? true : false,
    };

    const newUser = await createUser(newUserObj);

    return new Response("Successfully created user", {
      status: 200,
      user: newUser,
    });
  }

  // Update User
  if (eventType === "user.updated") {
    const { id, username, image_url, email_addresses, password_enabled } =
      evt.data;

    if (!id) return new Response("ID is not found", { status: 404 });

    const updatedUserObj = {
      clerkUserId: id,
      username: username,
      profileImage: image_url,
      email: email_addresses[0].email_address,
      passwordEnabled: password_enabled,
      emailVerified:
        email_addresses[0].verification.status === "verified" ? true : false,
    };

    const updatedUser = await updateUser(updatedUserObj);

    return new Response("Successfully updated user", {
      status: 200,
      user: updatedUser,
    });
  }

  // Delete User
  if (eventType === "user.deleted") {
    const { id } = evt.data;

    if (!id) return new Response("ID is not found", { status: 404 });

    const deletedUser = await deleteUser(id);

    return new Response("Successfully deleted user", {
      status: 200,
      user: deletedUser,
    });
  }

  return new Response("", { status: 200 });
}

export async function GET(req, res) {
  return new Response("HELLO WORLD!");
}
