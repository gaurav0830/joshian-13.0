import mongoose from "mongoose";
const dbConnect = async () => {
  try {
    const MONGODBURLS = process.env.MONGODBURL;
    await mongoose.connect("mongodb://localhost:27017");
    console.log(`[Database]:Database connected ${MONGODBURLS}`);
  } catch (error) {
    console.log("[Database]: Error while connecting..");
  }
};

export { dbConnect };
