const userModel = require("../models/userDetails");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const ErrorHandler = require('../utils/errorHandler')

const register = async (req, res, next) => {
  const { username, email, password } = req.body;
  console.log(username);
  try {
    const existingUser = await userModel.findOne({ email: email });
    if (existingUser) {
        return next(new ErrorHandler("User already existed",400));
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await userModel.create({
      username: username,
      email: email,
      password: hashedPassword,
    });

    const token = jwt.sign({ email: result.email }, process.env.SECRET_KEY);
    res.status(201).json({ user: result, token: token });
  } catch (error) {
    console.log(error);
    return next(error);
  }
  
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
    console.log(email);

  try {
    const existingUser = await userModel.findOne({ email: email });
    if (!existingUser) {
      return next(new ErrorHandler("User Not Found",404));
    }

    const matchPassword = await bcrypt.compare(password, existingUser.password);

    if (!matchPassword) {
      return next(new ErrorHandler("Invalid Credentials",400));
    }

    const token = jwt.sign(
      { email: existingUser.email },
      process.env.SECRET_KEY
    );
    res.status(201).json({ token: token });
  } catch (error) {
    console.log(error);
     return next(error);
  }
};

// const profile = async (req, res) => {
//   const { token } = req.body;
//   const decoded = jwt.decode(token);
//   const existingUser = await userModel.findOne({ email: decoded.email });
//   res
//     .status(201)
//     .json({ email: existingUser.email, username: existingUser.username });
// };

module.exports = { login, register };
