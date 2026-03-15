// UI Layer — Shared Avatar component

function Avatar({ src, alt = "avatar", size = 40, hasStory = false, className = "" }) {
  const inner = (
    <img
      src={src || `https://api.dicebear.com/7.x/adventurer/svg?seed=${alt}`}
      alt={alt}
      className="avatar-img"
      style={{ width: size, height: size }}
    />
  );

  if (hasStory) {
    return (
      <div className={`avatar-story-ring ${className}`} style={{ width: size + 6, height: size + 6 }}>
        <div className="avatar-inner-border" style={{ width: size + 2, height: size + 2 }}>
          {inner}
        </div>
      </div>
    );
  }

  return (
    <div className={`avatar-plain ${className}`} style={{ width: size, height: size }}>
      {inner}
    </div>
  );
}

export default Avatar;
