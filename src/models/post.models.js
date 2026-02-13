const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  caption: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    required: [true, "image uri is required"],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: [true, "user id is required"],
  },
});

const postModel = mongoose.model("post", postSchema);

module.exports = postModel;
