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

export async function updateUser(userObj) {
  try {
    ConnectDB();
    const user = await User.find(userObj.clerkUserId);

    if (!user) return "User not found";

    await User.update(user);

    return "User updated successfully";
  } catch (error) {
    console.log(error);
  }
}

export async function deleteUser(clerkUserId) {
  try {
    ConnectDB();
    await User.findByIdAndDelete(clerkUserId);
    return JSON.parse("User deleted successfully");
  } catch (error) {
    console.log(error);
  }
}
