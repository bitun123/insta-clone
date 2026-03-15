// Dashboard — PostActions Component
// Like button wired to handleLike/Unlike via usePost hook with animations.

import { useState } from "react";
import { Heart, MessageCircle, Send, Bookmark, Smile } from "lucide-react";
import { motion } from "framer-motion";
import { usePost } from "../../post/hooks/usePost";

function PostActions({ postId, likes = 0, username, caption, timestamp = "", isLikedByMe = false }) {
  const { handleLikePost, handleUnlikePost } = usePost();
  
  // Optimistic UI state
  const [isLiked, setIsLiked] = useState(isLikedByMe);
  const [likeCount, setLikeCount] = useState(likes);

  const onLikeClick = () => {
    if (!postId) return;
    
    if (isLiked) {
      setIsLiked(false);
      setLikeCount(prev => Math.max(0, prev - 1));
      handleUnlikePost(postId);
    } else {
      setIsLiked(true);
      setLikeCount(prev => prev + 1);
      handleLikePost(postId);
    }
  };

  return (
    <div className="post-actions-wrapper">
      {/* Action Buttons */}
      <div className="post-actions">
        <div className="post-actions-left">
          <motion.button 
            className={`icon-btn like-btn ${isLiked ? 'liked' : ''}`} 
            type="button" 
            onClick={onLikeClick}
            whileTap={{ scale: 0.8, rotate: isLiked ? 0 : -10 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            style={{ color: isLiked ? "#ff3040" : "inherit" }}
          >
            <Heart size={24} fill={isLiked ? "#ff3040" : "none"} />
          </motion.button>
          <button className="icon-btn" type="button">
            <MessageCircle size={24} />
          </button>
          <button className="icon-btn" type="button">
            <Send size={24} />
          </button>
        </div>
        <button className="icon-btn save-btn" type="button">
          <Bookmark size={24} />
        </button>
      </div>

      {/* Likes */}
      <div className="post-likes">{likeCount} {likeCount === 1 ? "like" : "likes"}</div>

      {/* Caption */}
      {caption && (
        <div className="post-caption">
          <span className="post-username">{username}</span>&nbsp;
          {caption}
        </div>
      )}

      {/* Timestamp */}
      {timestamp && <div className="post-time">{timestamp}</div>}

      {/* Add Comment */}
      <div className="post-comment-input">
        <Smile size={18} className="comment-emoji-icon" />
        <input
          type="text"
          placeholder="Add a comment…"
          className="comment-input"
          readOnly
        />
        <button className="comment-post-btn" type="button">Post</button>
      </div>
    </div>
  );
}

export default PostActions;
