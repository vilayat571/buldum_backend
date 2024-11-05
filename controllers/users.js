const Users = require("../models/user.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  const { username, password } =
    req.body;
  const user = await Users.findOne({ username });

  if (!user) {
    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = await Users.create({
      username,
      password: passwordHash
    });
    const token = jwt.sign({ id: newUser._id }, "SECRETTOKEN", {
      expiresIn: "1h",
    });
    return res.status(201).json({
      status: "OK",
      message: "Uğurla qeydiyyatdan keçdiniz! 🎉",
      user: newUser,
      token,
    });
  } else {
    return res.status(504).json({
      status: "FAILED",
      message: "Bu istifadəçi adı ilə bir istifadəçi mövcuddur!",
    });
  }
};

module.exports={
    registerUser
}