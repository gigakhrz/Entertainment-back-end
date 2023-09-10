import User from "../models/Users.js";
import Entertainment from "../models/Users.js";

// N1 function
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

// N2 function
export const validateUser = async (req, res) => {
  const { email, password } = req.body;

  // check if this email is  registrered
  const validEmail = await User.findOne({ email });
  if (!validEmail) {
    res.status(404).json({ error: "Email cannot be found" });
    return;
  }
  const truepasw = validEmail.password;

  const isPasswordValid = password === validEmail.password;

  if (!isPasswordValid) {
    res.status(401).json({ error: { truepasw, password, isPasswordValid } });
    return;
  }

  // If both email and password are valid, proceed with the login
  res.status(200).json({ message: "User logged in successfully" });
};

// N3 function
export const getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(201).json(users);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};

// N4 function. to post data.json using postman
export const postEntertainment = async (req, res) => {
  try {
    const data = req.body; // Assuming req.body is an array of objects

    const result = await Entertainment.insertMany(data);
    res.json(result);
  } catch (error) {
    console.log("Can't post");
    res.status(500).json({ error: "An error occurred" });
  }
};

export const getEntertainment = async (req, res) => {
  try {
    const entertainment = await Entertainment.find();
    res.status(201).json(entertainment);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred" });
  }
};
