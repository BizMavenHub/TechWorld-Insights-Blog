import User from "@/lib/mongodb/schema/user.schema";
import { ConnectDB } from "@/lib/mongodb/db"; // Connect MongoDB

export async function createUser(user) {
  try {
    ConnectDB();
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
  }
}
