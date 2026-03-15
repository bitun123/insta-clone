const postModels = require("../models/post.models");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const jwt = require("jsonwebtoken");
const likesModels = require("../models/like.models");

const imageKit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function createPostControllers(req, res) {
  // const token  = req.cookies("token")


  const file = await imageKit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "test",
    folder: "insta-clone-post",
  });

  const post = await postModels.create({
    caption: req.body.caption,
    image: file.url,
    user: req.user.id,
  });

  res.status(201).json({
    message: "post is created",
    post,
  });
}

async function getPostControllers(req, res) {

  const userId = req.user.id;

  const posts = await postModels
    .find({ user: userId })
    .sort({ createdAt: -1 })
    .populate("user")
    .lean();

  if (posts.length === 0) {
    return res.status(401).json({
      message: "there no post you created",
    });
  }

  for (let post of posts) {
    post.likes = await likesModels.find({ post: post._id });
  }

  res.status(200).json({
    message: "post fetch successfully",
    posts,
  });
}

async function getPostDetailsControllers(req, res) {

  const userId = req.user.id;
  const postId = req.params.postId;
  const post = await postModels.findById(postId).populate("user").lean();
  if (!post) {
    return res.status(404).json({
      message: "there are no post"
    })
  }

  const isValidUser = post.user._id.toString() === userId || post.user.toString() === userId;
  if (!isValidUser) {
    return res.status(403).json({
      message: "forbidden content "
    })
  }

  post.likes = await likesModels.find({ post: post._id });

  return res.status(200).json({
    message: "post Fetch Successfully",
    post
  })

}


async function likesControllers(req, res) {


  const userId = req.user.id;
  const postId = req.params.postId


  const posts = await postModels.findById(postId);
  if (!posts) {
    return res.status(400).json({
      message: "post not found"
    })
  }


  const like = await likesModels.findOne({ user: userId, post: postId });
  if (like) {
    return res.status(400).json({ message: "Already liked" });
  }

  const newLike = await likesModels.create({
    user: userId,
    post: postId
  })

  res.status(201).json({
    message: "post liked Successfully",
    like: newLike
  })

}


async function getFeedController(req, res) {
  const posts = await postModels.find().sort({ createdAt: -1 }).populate("user").lean();

  for (let post of posts) {
    post.likes = await likesModels.find({ post: post._id });
  }

  res.status(200).json({
    message: "Post fetched successfully",
    posts
  })

}





async function unlikeController(req, res) {
  const userId = req.user.id;
  const postId = req.params.postId;

  const like = await likesModels.findOneAndDelete({ user: userId, post: postId });

  res.status(200).json({
    message: "post unliked Successfully",
    like
  });
}

module.exports = {
  createPostControllers,
  getPostControllers,
  getPostDetailsControllers,
  likesControllers,
  unlikeController,
  getFeedController
};
