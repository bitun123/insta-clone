// Dashboard — PostHeader Component

import Avatar from "../../../ui/Avatar";
import { MoreHorizontal } from "lucide-react";

function PostHeader({ username, location, avatarSeed }) {
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
      <button className="bg-none border-none text-gray-200 cursor-pointer p-1.5 rounded-lg flex items-center justify-center transition-all duration-150 hover:opacity-70 active:scale-85 leading-none" type="button">
        <MoreHorizontal size={20} />
      </button>
    </div>
  );
}

export default PostHeader;
