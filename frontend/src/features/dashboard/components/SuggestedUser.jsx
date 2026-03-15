// Dashboard — SuggestedUser Component

import { useState, useEffect } from "react";
import { useAuth } from "../../auth/hooks/useAuth";
import FollowButton from "../../../ui/FollowButton";

function SuggestedUser({ userId, username, subtitle, avatarSeed, isFollowing = false }) {
  const { handleFollowUser, handleUnfollowUser } = useAuth();
  const [following, setFollowing] = useState(isFollowing);

  useEffect(() => {
    setFollowing(isFollowing);
  }, [isFollowing]);

  const onFollowToggle = async () => {
    if (!userId) return; // Prevent if dummy data
    
    if (following) {
      setFollowing(false);
      await handleUnfollowUser(userId);
    } else {
      setFollowing(true);
      await handleFollowUser(userId);
    }
  };

  return (
    <div className="flex items-center justify-between gap-2.5">
      <div className="flex items-center gap-2.5 min-w-0">
        <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0 bg-gray-700">
          <img
            src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${avatarSeed || username}`}
            alt={username}
            className="w-full h-full object-cover block"
          />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-sm font-semibold text-gray-100 overflow-hidden text-ellipsis whitespace-nowrap">{username}</span>
          <span className="text-xs text-gray-600 overflow-hidden text-ellipsis whitespace-nowrap">{subtitle}</span>
        </div>
      </div>
      <FollowButton 
        isFollowing={following} 
        onClick={onFollowToggle}
      />
    </div>
  );
}

export default SuggestedUser;
