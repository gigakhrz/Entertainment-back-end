import User from "../models/Users.js";

export const createUSer = async (req, res) => {
  try {
    const { email, password } = req.body;
    const newUser = new User({
      email,
      password,
    });
    await newUser.save();
    res.status(200).json({ message: "user created" });
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};

export const getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(201).json(users);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};
