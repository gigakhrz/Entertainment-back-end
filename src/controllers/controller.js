import User from "../models/Users.js";

export const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the email is already in use
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: "Email is already in use" });
    }

    //save the information
    const newUser = new User({
      email,
      password,
    });

    await newUser.save();
    res.status(200).json({ message: "User created" });
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
