import User from "../models/Users.js";

export const createUSer = async (req, res) => {
  try {
    const { email, password } = req.body;
    const newUser = new User({
      email,
      password,
    });
    res.status(200).json({ message: "user created" });
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};
