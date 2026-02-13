const userModels = require("../models/user.models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
async function registrationControllers(req, res) {
  const { userName, email, password, bio, profileImage } = req.body;

  const isUserAvailable = await userModels.findOne({
    $or: [{ email }, { userName }],
  });
  if (isUserAvailable) {
    return res.status(409).json({
      message: "user is already exists",
    });
  }

  const hash = bcrypt.hashSync(password, 10);
  const user = await userModels.create({
    userName,
    email,
    password: hash,
    bio,
  });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("jwt_token", token);

  res.status(201).json({
    message: "registration successfully",
    user: {
      userName: user.userName,
      email: user.email,
      bio: user.bio,
      profileImage: user.profileImage,
    },
    token,
  });
}

async function loginControllers(req, res) {
  const { userName, email, password } = req.body;
  const user = await userModels.findOne({
    $or: [{ userName }, { email }],
  });
  if (!user) {
    return res.status(401).json({
      message: "user not exists",
    });
  }

  const isPasswaorMatch = await bcrypt.compare(password, user.password);
  if (!isPasswaorMatch) {
    return res.status(401).json({
      message: "password not Match",
    });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("token", token);

  res.status(200).json({
    message: "login successfully",
    user: {
      user: user.userName,
      email: user.email,
    },
    token,
  });
}

module.exports = {
  registrationControllers,
  loginControllers
};
