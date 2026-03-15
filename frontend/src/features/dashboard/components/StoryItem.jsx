// Dashboard — StoryItem Component

import Avatar from "../../../ui/Avatar";

function StoryItem({ username, seed, isYou = false }) {
  return (
    <div className="story-item">
      <div className="story-avatar-wrap">
        <Avatar
          src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${seed || username}`}
          alt={username}
          size={58}
          hasStory={!isYou}
        />
        {isYou && (
          <div className="story-add-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
        )}
      </div>
      <span className="story-username">{isYou ? "Your story" : username}</span>
    </div>
  );
}

export default StoryItem;
