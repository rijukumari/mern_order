import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log("✅ MongoDB Connected successfuly");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
  }
}
export default connectDB;