const postModels = require("../models/post.models");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const jwt = require("jsonwebtoken");

const imageKit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function createPostControllers(req, res) {
  // const token  = req.cookies("token")
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "token not provided. Unauthorized access",
    });
  }

  let decode = null;
  try {
    decode = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return res.status(401).json({
      message: "user not authorized",
    });
  }

  const file = await imageKit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "test",
    folder: "insta-clone-post",
  });

  const post = await postModels.create({
    caption: req.body.caption,
    image: file.url,
    user: decode.id,
  });

  res.status(201).json({
    message: "post is created",
    post,
  });
}

async function getPostControllers(req,res){
const token  = req.cookies.tokens;
if(!token){
  res.status(401).json({
    message:"unthorized user"
  })
}


}



module.exports = {
createPostControllers,
  getPostControllers
};
