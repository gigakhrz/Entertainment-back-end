import { Schema, model } from "mongoose";

const usersSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = model("users", usersSchema);

export default User;
