const commentModel = require("../models/comment.model");
const { getIo } = require("../sockets/server.socket");

async function createNewCommentController(req, res) {
  try {
    const { postId } = req.params;
    const { content } = req.body;
    const userId = req.user.id;
    console.log(userId);
    if (!content || content.trim() === "") {
      return res.status(400).json({
        message: "Content is required and cannot be empty",
      });
    }

    const comment = await commentModel.create({
      userId,
      postId,
      content,
      role: "user",
      parentCommentId: null,
    });

    const populatedUser = await comment.populate("userId");
    const io = getIo();

    io.to(postId).emit("newComment", {
      comment: {
        ...comment.toObject(),
        userId: populatedUser.userId,
      },
    });

    res.status(201).json({
      message: "Comment created successfully",
      comment,
    });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while creating the comment",
      error: error.message,
    });
  }
}

async function createReplyController(req, res) {
  try {
    const { commentId, postId } = req.params;
    const { content } = req.body;
    const userId = req.user.id;
    const parent = await commentModel.findById(commentId);

    if (!parent) {
      return res.status(404).json({ message: "Parent not found" });
    }

    const reply = await commentModel.create({
      postId,
      userId,
      content,
      role: "admin",
      parentCommentId: commentId,
    });

    const populated = await reply.populate("userId");

    getIo().to(postId).emit("comments:reply", {
      comment: populated,
      parentCommentId: commentId,
    });
    res.status(201).json({
      message: "Reply created successfully",
      comment: reply,
    });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while creating the reply",
      error: error.message,
    });
  }
}



export const deleteComment = async (req, res) => {
  try {
    const { commentId} = req.params;
    const userId = req.user.id;

    const comment = await commentModel.findById(commentId);

    if (!comment) {
      return res.status(404).json({ message: "Not found" });
    }

    if (comment.userId.toString() !== userId) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    await comment.deleteOne();

    getIo()
      .to(comment.postId.toString())
      .emit("comments:delete", commentId);

    res.status(200).json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed" });
  }
};

// 🔥 LIKE / UNLIKE
export const toggleLikeComment = async (req, res) => {
  try {
    const { commentId } = req.params;
    const userId = req.user.id;

    const comment = await commentModel.findById(commentId);

    if (!comment) {
      return res.status(404).json({ message: "Not found" });
    }

    const alreadyLiked = comment.likes.includes(userId);

    if (alreadyLiked) {
      comment.likes = comment.likes.filter(
        (uid) => uid.toString() !== userId
      );
    } else {
      comment.likes.push(userId);
    }

    await comment.save();

    getIo()
      .to(comment.postId.toString())
      .emit("comments:like", {
        commentId: comment._id,
        likes: comment.likes.length,
      });

    res.status(200).json({
      message: alreadyLiked ? "Unliked" : "Liked",
      likes: comment.likes.length,
    });
  } catch (err) {
    res.status(500).json({ message: "Like failed" });
  }
};

module.exports = {
  createNewCommentController,
  createReplyController,
  deleteComment,
  toggleLikeComment
};
