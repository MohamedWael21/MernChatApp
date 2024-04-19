import mongoose from "mongoose";

export default async function connectToDb() {
  await mongoose.connect(process.env.DB_URL);
}
