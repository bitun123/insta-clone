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
    <div>
      {/* Action Buttons */}
      <div className="flex items-center justify-between px-3 pt-2 pb-1">
        <div className="flex items-center gap-2">
          <motion.button 
            className={`bg-none border-none text-gray-200 cursor-pointer p-1.5 rounded-lg flex items-center justify-center transition-all duration-150 hover:opacity-70 active:scale-85 leading-none ${isLiked ? "text-red-500" : ""}`} 
            type="button" 
            onClick={onLikeClick}
            whileTap={{ scale: 0.8, rotate: isLiked ? 0 : -10 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Heart size={24} fill={isLiked ? "#ff3040" : "none"} />
          </motion.button>
          <button className="bg-none border-none text-gray-200 cursor-pointer p-1.5 rounded-lg flex items-center justify-center transition-all duration-150 hover:opacity-70 active:scale-85 leading-none" type="button">
            <MessageCircle size={24} />
          </button>
          <button className="bg-none border-none text-gray-200 cursor-pointer p-1.5 rounded-lg flex items-center justify-center transition-all duration-150 hover:opacity-70 active:scale-85 leading-none" type="button">
            <Send size={24} />
          </button>
        </div>
        <button className="bg-none border-none text-gray-200 cursor-pointer p-1.5 rounded-lg flex items-center justify-center transition-all duration-150 hover:opacity-70 active:scale-85 leading-none" type="button">
          <Bookmark size={24} />
        </button>
      </div>

      {/* Likes */}
      <div className="px-4 py-0.5 text-sm font-semibold text-gray-100">{likeCount} {likeCount === 1 ? "like" : "likes"}</div>

      {/* Caption */}
      {caption && (
        <div className="px-4 py-1 text-sm text-gray-200 leading-relaxed">
          <span className="font-semibold text-sm text-gray-100 cursor-pointer hover:underline">{username}</span>&nbsp;
          {caption}
        </div>
      )}

      {/* Timestamp */}
      {timestamp && <div className="px-4 pb-2 text-xs text-gray-600 uppercase tracking-wider">{timestamp}</div>}

      {/* Add Comment */}
      <div className="flex items-center gap-2.5 px-4 pb-3 border-t pt-2 border-gray-800">
        <Smile size={18} className="text-gray-600 flex-shrink-0" />
        <input
          type="text"
          placeholder="Add a comment…"
          className="flex-1 bg-none border-none outline-none text-sm text-gray-200 placeholder:text-gray-600"
        
        />
        <button className="bg-none border-none text-blue-500 text-sm font-semibold cursor-pointer p-0" type="button">Post</button>
      </div>
    </div>
  );
}

export default PostActions;
