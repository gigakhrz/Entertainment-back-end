import mongoose from "mongoose";

const connect = async () => {
  const url = process.env.MONGO_URL;
  try {
    mongoose.connect(url);
  } catch (error) {
    console.log(error);
  }
};

export default connect;
