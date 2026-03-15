// UI Layer — Shared FollowButton component

function FollowButton({ isFollowing = false, onClick, className = "" }) {
  return (
    <button 
      type="button" 
      onClick={onClick}
      className={`ui-follow-btn ${className}`}
      style={{ color: isFollowing ? "#a8a8a8" : "" }}
    >
      {isFollowing ? "Following" : "Follow"}
    </button>
  );
}

export default FollowButton;
