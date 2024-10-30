import { User } from "@/lib/mongodb/schema/user.schema";
import { ConnectDB } from "@/lib/mongodb/db"; // Connect MongoDB

export async function createUser(user) {
  try {
    await ConnectDB();
    const newUser = await User.create(user);
    return { user: newUser };
  } catch (error) {
    console.log(error);
  }
}

export async function updateUser(userObj) {
  try {
    await ConnectDB();
    console.log(userObj);

    const user = await User.find({ clerkUserId: userObj.clerkUserId });

    console.log(user);

    if (!user) return "User not found";

    await User.updateOne(userObj);

    return "User updated successfully";
  } catch (error) {
    console.log(error);
  }
}

export async function deleteUser(clerkUserId) {
  try {
    await ConnectDB();
    await User.deleteOne({ clerkUserId });
    return "User deleted successfully";
  } catch (error) {
    console.log(error);
  }
}
