// Dashboard — StoryItem Component

import Avatar from "../../../ui/Avatar";

function StoryItem({ username, seed, isYou = false }) {
  return (
    <div className="flex flex-col items-center gap-1.5 cursor-pointer flex-shrink-0">
      <div className="relative">
        <Avatar
          src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${seed || username}`}
          alt={username}
          size={58}
          hasStory={!isYou}
        />
        {isYou && (
          <div className="absolute bottom-0 right-0 w-5.5 h-5.5 rounded-full bg-blue-500 border-2 border-black flex items-center justify-center text-white text-xs font-bold leading-none">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
        )}
      </div>
      <span className="text-xs text-gray-500 max-w-[72px] text-center overflow-hidden text-ellipsis whitespace-nowrap">{isYou ? "Your story" : username}</span>
    </div>
  );
}

export default StoryItem;
