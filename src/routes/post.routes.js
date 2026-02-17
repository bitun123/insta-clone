const express = require("express");
const postRouter = express.Router();
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const postControllers = require("../controllers/post.controllers");

postRouter.post("/", upload.single("image"), postControllers.createPostControllers);

postRouter.get("/",postControllers.getPostControllers);

postRouter.get("/details/:postId",postControllers.getPostDetailsControllers)

module.exports = postRouter;
