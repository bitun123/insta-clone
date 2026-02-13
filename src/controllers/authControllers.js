const userModels = require("../models/user.models");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
async function registerControllers(req, res) {
  const { userName, email, password, bio,profileImage } = req.body;

  const isUserAvailable = await userModels.findOne({
    $or: [{ email }, { userName }],
  });

  if (isUserAvailable) {
    return res.status(409).json({
      message: "user is already exists",
    });
  }

  const hash = await  bcrypt.hash(password,10)

  const user = await userModels.create({
    userName,
    email,
    password: hash,
    bio,
    profileImage,
  });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  res.cookie("jwt-token", token);

  res.status(200).json({
    message: "Register successfully",
    userName,
    email,
    bio,
    profileImage,
    token,
  });
}

async function loginControllers(req, res) {
  const { userName, email, password } = req.body;
  const user = await userModels.findOne({
    $or: [{ email }, { userName }],
  });
  if (!user) {
    return res.status(401).json({
      message: "user not find ",
    });
  }

  const isPasswordAvailable = await bcrypt.compare(password,user.password)
  if (!isPasswordAvailable) {
    return res.status(401).json({
      message: "password not Match",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );

  res.cookie("jwt_token", token);

  res.status(200).json({
    message: "Login successfully",
    user: {
      userName: user.userName,
      email: user.email,
    profileImage : user.profileImage
    },
    token,
  });
}

module.exports = {
  registerControllers,
  loginControllers
};
