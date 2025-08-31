import User from "../models/user.model.js";
import bcrypt from "bcryptjs";



export const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ message: "All fields are required", success: false });
    }

    // Agar file aayi hai to use karo, warna null/empty string store karo
    const image_filename = req.file ? req.file.filename : null;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      image: image_filename,
    });

    return res.status(201).json({
      message: "User created successfully",
      success: true,
      user,
    });
  } catch (error) {
    console.error("❌ Signup error:", error.message);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error.message,
    });
  }
};

// login**
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ message: "user not found", success: false });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ message: "Invalid creadentials", success: false });
    }
    return res
      .status(200)
      .json({ message: "Login successful", success: true, user });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal serval error", success: false });
  }
};
