

import { useState, useContext } from "react";
import { Heart, MessageCircle, Send, Bookmark, Smile } from "lucide-react";
import { usePost } from "../../post/hooks/usePost";
import { DashboardContext } from "../context/dashboardContext";
import CommentsPopUp from "./CommentsPopUp";

function PostActions({ postId, likes = 0, username, caption, timestamp = "", isLikedByMe = false }) {
  const { handleLikePost, handleUnlikePost } = usePost();
  const { setShowCommentsPopup } = useContext(DashboardContext);
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
      <div className="flex items-center justify-between px-2 sm:px-3 pt-2 pb-1">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button 
            className={`bg-none border-none text-gray-200 cursor-pointer p-1.5 rounded-lg flex items-center justify-center transition-all duration-150 hover:opacity-70 active:scale-85 leading-none ${isLiked ? "text-red-500" : ""}`} 
            type="button" 
            onClick={onLikeClick}
          >
            <Heart size={20} className="sm:w-6 sm:h-6" fill={isLiked ? "#ff3040" : "none"} />
          </button>
          <button className="bg-none border-none text-gray-200 cursor-pointer p-1.5 rounded-lg flex items-center justify-center transition-all duration-150 hover:opacity-70 active:scale-85 leading-none" type="button" onClick={() => setShowCommentsPopup(true)}>
            <MessageCircle size={20} className="sm:w-6 sm:h-6" />
          </button>
          <button className="bg-none border-none text-gray-200 cursor-pointer p-1.5 rounded-lg flex items-center justify-center transition-all duration-150 hover:opacity-70 active:scale-85 leading-none" type="button">
            <Send size={20} className="sm:w-6 sm:h-6" />
          </button>
        </div>
        <button className="bg-none border-none text-gray-200 cursor-pointer p-1.5 rounded-lg flex items-center justify-center transition-all duration-150 hover:opacity-70 active:scale-85 leading-none" type="button">
          <Bookmark size={20} className="sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Likes */}
      <div className="px-2 sm:px-3 md:px-4 py-0.5 text-xs sm:text-sm font-semibold text-gray-100">{likeCount} {likeCount === 1 ? "like" : "likes"}</div>

      {/* Caption */}
      {caption && (
        <div className="px-2 sm:px-3 md:px-4 py-1 text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed">
          <span className="font-semibold text-xs sm:text-sm md:text-base text-gray-100 cursor-pointer hover:underline">{username}</span>&nbsp;
          {caption}
        </div>
      )}

      {/* Timestamp */}
      {timestamp && <div className="px-2 sm:px-3 md:px-4 pb-2 text-xs text-gray-600 uppercase tracking-wider">{timestamp}</div>}

      {/* Add Comment */}
      

      <CommentsPopUp />
    </div>
  );
}

export default PostActions;
