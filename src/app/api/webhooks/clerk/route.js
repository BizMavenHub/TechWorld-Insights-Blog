import { NextResponse } from "next/server";

import { Webhook } from "svix";
import { headers } from "next/headers";

// Actions
import { createUser } from "@/lib/actions/user.action";

export async function POST(req) {
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the endpoint
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

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
  const { id } = evt.data;
  const eventType = evt.type;

  if (eventType === "user.created") {
    const { id, email_addresses, username, image_url, password_enabled } =
      evt.data;

    if (!id || !emailAddresses) {
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

    console.log("New user created:", newUser);
    // You can also send a response to the Clerk API or perform other actions based on the event data.
    // For example, you can send a welcome email or update user data in your own database.
    // Make sure to handle any potential errors or exceptions appropriately.
  }

  return new Response("", { status: 200 });
}
