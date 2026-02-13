const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    unique: [true, "userName is already exists"],
    required: [true, "userName is required"],
  },
  email: {
    type: String,
    unique: [true, "email is already exists"],
    required: [true, "email is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  bio: String,
  profileImage: {
    type: String,
    default:"https://ik.imagekit.io/6pzg4qptd/insta-clone-default-pic/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3407.avif?updatedAt=1770874757290",
  },
});

const userModels = mongoose.model("user", userSchema);

module.exports = userModels;
