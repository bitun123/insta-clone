const express = require("express");
const postRouter = express.Router();
const upload = require("../middleware/upload.middleware");
const postControllers = require("../controllers/post.controllers");
const identifyUser = require("../middleware/user.middleware");

postRouter.post(
  "/",
  upload.single("image"),
  identifyUser,
  postControllers.createPostControllers,
);

postRouter.get("/", identifyUser, postControllers.getPostControllers);

postRouter.get(
  "/details/:postId",
  identifyUser,
  postControllers.getPostDetailsControllers,
);

postRouter.post(
  "/likes/:postId",
  identifyUser,
  postControllers.likesControllers,
);

postRouter.delete(
  "/likes/:postId",
  identifyUser,
  postControllers.unlikeController
);

postRouter.get("/feed", identifyUser, postControllers.getFeedController);

postRouter.delete("/:postId", identifyUser, postControllers.deletePostControllers);

module.exports = postRouter;
