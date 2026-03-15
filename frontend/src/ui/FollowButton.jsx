// UI Layer — Shared FollowButton component

function FollowButton({ isFollowing = false, onClick, className = "" }) {
  return (
    <button 
      type="button" 
      onClick={onClick}
      className={`bg-none border-none text-blue-400 text-xs font-bold cursor-pointer whitespace-nowrap transition-colors duration-150 hover:text-blue-600 ${isFollowing ? "text-gray-500" : ""} ${className}`}
    >
      {isFollowing ? "Following" : "Follow"}
    </button>
  );
}

export default FollowButton;
