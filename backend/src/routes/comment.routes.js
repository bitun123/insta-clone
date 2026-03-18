const {Router} = require('express');
const identifyUser = require('../middleware/user.middleware');
const commentControllers = require('../controllers/comment.controllers');

const commentRouter = Router();

commentRouter.post("/:postId", identifyUser, commentControllers.createNewCommentController);
// commentRouter.post("/likes/:commentId", identifyUser, commentControllers.likeCommentController);

commentRouter.post("/replies/:postId/:commentId", identifyUser, commentControllers.createReplyController);

commentRouter.delete("/:commentId", identifyUser, commentControllers.deleteComment);

commentRouter.post("/likes/:commentId", identifyUser, commentControllers.toggleLikeComment);


module.exports = commentRouter;