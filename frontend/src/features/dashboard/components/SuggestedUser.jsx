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
    <div className="suggested-user">
      <div className="suggested-user-left">
        <div className="suggested-avatar-wrap">
          <img
            src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${avatarSeed || username}`}
            alt={username}
            className="suggested-avatar"
          />
        </div>
        <div className="suggested-user-info">
          <span className="suggested-username">{username}</span>
          <span className="suggested-subtitle">{subtitle}</span>
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
