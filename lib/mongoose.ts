import mongoose from "mongoose";

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) {
    return console.error("MISSING MONGODB_URL");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "devflow",
    });
  } catch (error) {
    console.log(error);
  }
};
