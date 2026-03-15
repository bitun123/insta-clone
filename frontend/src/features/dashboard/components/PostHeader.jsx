// Dashboard — PostHeader Component

import Avatar from "../../../ui/Avatar";
import { MoreHorizontal } from "lucide-react";

function PostHeader({ username, location, avatarSeed }) {
  return (
    <div className="post-header">
      <div className="post-user-info">
        <div className="avatar-ring">
          <img
            src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${avatarSeed || username}`}
            alt={username}
            className="post-avatar"
          />
        </div>
        <div className="post-user-text">
          <span className="post-username">{username}</span>
          {location && <span className="post-location">{location}</span>}
        </div>
      </div>
      <button className="icon-btn" type="button">
        <MoreHorizontal size={20} />
      </button>
    </div>
  );
}

export default PostHeader;
