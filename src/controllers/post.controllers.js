const postModels = require("../models/post.models");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const jwt = require("jsonwebtoken");
const { post } = require("../routes/post.routes");

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
  const posts = await postModels.find({
    user: userId,
  });
  if (posts.length == 0) {
    return res.status(401).json({
      message: "there no post you created",
    });
  }
  res.status(200).json({
    message: "post fetch successfully",
    posts,
  });
}

async function getPostDetailsControllers(req, res) {



const userId  = req.user.id;
const postId = req.params.postId;
const post = await postModels.findById(postId);
if(!post){
  return res.status(404).json({
    message:"there are no post"
  })
}

const isValidUser = post.user.toString() === userId;
if(!isValidUser){
  return res.status(403).json({
    message :"forbidden content "
  })
}


return res.status(200).json({
  message:"post Fetch Successfully",
  post
})

}

module.exports = {
  createPostControllers,
  getPostControllers,
  getPostDetailsControllers,
};
