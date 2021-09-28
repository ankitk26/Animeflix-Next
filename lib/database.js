import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;

export const connectDb = async () => {
  try {
    await mongoose.connect(uri, {
      autoIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("db connected");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};
