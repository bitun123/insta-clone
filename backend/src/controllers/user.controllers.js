const userModels = require("../models/user.models");
const followModels = require("../models/follow.models");
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

  res.cookie("token", token, {
    httpOnly: true,
    secure: false, // Set true in production
    sameSite: "lax",
  });

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

  const user = await userModels
    .findOne({ $or: [{ userName }, { email }] })
    .select("userName email password")
    .lean();

  if (!user) {
    return res.status(401).json({
      message: "user not exists",
    });
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    return res.status(401).json({
      message: "password not match",
    });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  });

  res.status(200).json({
    message: "login successfully",
    user: {
      userName: user.userName,
      email: user.email,
    },
  });
}

async function getControllers(req, res) {
  try {
    const userId = req.user.id;
    const user = await userModels.findById(userId).lean();
    if (!user) {
      return res.status(404).json({
        message: "user not found",
      });
    }

    const followingRecords = await followModels.find({ follower: userId });
    const following = followingRecords.map((record) => record.followee);

    res.status(200).json({
      message: "user found",
      user,
      following,
    });
  } catch (error) {
    console.error("GetMe controller error:", error);
    res.status(500).json({
      message: "internal server error",
    });
  }
}

async function logoutControllers(req, res) {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }
    res.clearCookie("token");
    res.status(200).json({
      message: "logout successfully",
    });
  } catch (error) {
    console.error("Logout controller error:", error);
    res.status(500).json({
      message: "internal server error",
    });
  }
}


async function getAllUsersControllers(req, res) {
  try {
    const users = await userModels.find().select("userName email profileImage");
    res.status(200).json({
      message: "users retrieved successfully",
      users,
    });
  } catch (error) {
    console.error("Get All Users controller error:", error);
    res.status(500).json({
      message: "internal server error",
    });
  }
}


module.exports = {
  registrationControllers,
  loginControllers,
  getControllers,
  logoutControllers,
  getAllUsersControllers,
};
