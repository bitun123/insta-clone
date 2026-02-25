const express = require("express");
const postRouter = express.Router();
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const postControllers = require("../controllers/post.controllers");
const identifyUser = require("../middleware/user.middleware")

postRouter.post("/", upload.single("image"),identifyUser, postControllers.createPostControllers);

postRouter.get("/",identifyUser, postControllers.getPostControllers);

postRouter.get("/details/:postId",identifyUser, postControllers.getPostDetailsControllers);


postRouter.post("/likes/:postId",identifyUser,postControllers.likesControllers)

postRouter.get("/feed",identifyUser,postControllers.getFeedController)



module.exports = postRouter;
