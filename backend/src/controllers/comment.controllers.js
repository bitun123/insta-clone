const commentModel = require("../models/comment.model.js");
const postModel = require("../models/post.models.js") // Post owner check karne ke liye

async function commentOnPostController(req, res) {
  try {
    const { postId } = req.params;
    const { content, parentCommentId } = req.body;
    const userId = req.user.id;

    if (!content || !content.trim()) {
      return res.status(400).json({ message: "Content is required" });
    }


    const post = await postModel.findById(postId);

    console.log("Looking for post with ID:", postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

console.log("Post found for commenting:", post);


    if (parentCommentId) {
  
      const isPostOwner = post._id.toString() === userId.toString();

      if (!isPostOwner) {
        return res.status(403).json({ 
          message: "Only the post owner can reply to comments!" 
        });
      }
    }

    const comment = await commentModel.create({
      userId,
      postId,
      content: content.trim(),
      parentCommentId: parentCommentId || null,
      role: parentCommentId ? "admin" : "user" // Ab ye role logic sahi baith raha hai!
    });

    res.status(201).json({
      success: true,
      message: parentCommentId ? "Reply added by owner" : "Comment added",
      comment,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function likeCommentController(req, res) {
  try {
    const { commentId } = req.params;
    const userId = req.user.id;
    const comment = await commentModel.findById(commentId);

    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    // Check if user has already liked the comment
    const isLiked = comment.likes.includes(userId);
    if (isLiked) {
      // Unlike the comment
      comment.likes = comment.likes.filter((id) => id.toString() !== userId.toString());
    } else {
      // Like the comment
      comment.likes.push(userId);
    }

    await comment.save();

    res.status(200).json({
      success: true,
      message: isLiked ? "Comment unliked" : "Comment liked",
      comment,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  commentOnPostController,
  likeCommentController
};








