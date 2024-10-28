import mongoose from "mongoose";

export async function ConnectDB() {
  const URI = process.env.MONGODB_URI;

  if (!URI) console.log("MONGODB_URI is not founded!");

  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error(error);
  }
}
