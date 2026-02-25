const mongoose = require("mongoose");


//create user schema
const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    unique: [true, "userName is already exists"],
    required: [true, "user is required"],
  },
  email: {
    type: String,
    unique: [true, "email is already exists"],
    required: [true, "email is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
    select: false,
  },
  bio: String,
  profileImage: {
    type: String,
    default:
      "https://ik.imagekit.io/6pzg4qptd/insta-clone-default-pic/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3407.avif?updatedAt=1770874757290",
  },
});


//create models 
const userModels = mongoose.model("user", userSchema);



//exports models
module.exports = userModels;
