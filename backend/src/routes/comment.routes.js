const {Router} = require('express');
const identifyUser = require('../middleware/user.middleware');
const commentControllers = require('../controllers/comment.controllers');

const commentRouter = Router();

commentRouter.post("/:postId", identifyUser, commentControllers.commentOnPostController);
commentRouter.post("/likes/:commentId", identifyUser, commentControllers.likeCommentController);
module.exports = commentRouter;