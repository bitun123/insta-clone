// Dashboard — PostHeader Component

import Avatar from "../../../ui/Avatar";
import {  Trash2 } from "lucide-react";
import { usePost } from "../../post/hooks/usePost";

function PostHeader({ username, location, avatarSeed, postId, onDeleteSuccess }) {
const { handleDeletePost } = usePost();
const handleDelete = async () => {
  if (!postId) {
    alert("Post ID is missing");
    console.error("PostHeader - postId is missing/undefined");
    return;
  }

  if (!window.confirm("Are you sure you want to delete this post?")) {
    return;
  }

  try {
    await handleDeletePost(postId);
    alert("Post deleted successfully!");
    if (onDeleteSuccess) {
      onDeleteSuccess();
    }
  } catch(error) {
    alert("Failed to delete the post. Please try again.",error.message);

  }
}

  return (
    <div className="flex items-center justify-between px-4 py-3">
      <div className="flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-full p-0.5 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 flex-shrink-0">
          <img
            src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${avatarSeed || username}`}
            alt={username}
            className="w-full h-full rounded-full object-cover border-2 border-black block"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-gray-100 cursor-pointer hover:underline">{username}</span>
          {location && <span className="text-xs text-gray-400">{location}</span>}
        </div>
      </div>
      <button className="bg-none border-none text-red-800 cursor-pointer p-1.5 rounded-lg flex items-center justify-center transition-all duration-150 hover:opacity-70 active:scale-85 leading-none" type="button" 
      onClick={handleDelete}
      >
   <Trash2  size={20}/>
      </button>
    </div>
  );
}

export default PostHeader;
