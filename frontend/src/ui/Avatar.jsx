// UI Layer — Shared Avatar component

function Avatar({ src, alt = "avatar", size = 40, hasStory = false, className = "" }) {
  const inner = (
    <img
      src={src || `https://api.dicebear.com/7.x/adventurer/svg?seed=${alt}`}
      alt={alt}
      className="rounded-full object-cover block"
      style={{ width: size, height: size }}
    />
  );

  if (hasStory) {
    return (
      <div className={`rounded-full bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 p-0.5 flex items-center justify-center flex-shrink-0 ${className}`} style={{ width: size + 6, height: size + 6 }}>
        <div className="rounded-full bg-black p-0.5 flex items-center justify-center" style={{ width: size + 2, height: size + 2 }}>
          {inner}
        </div>
      </div>
    );
  }

  return (
    <div className={`rounded-full overflow-hidden flex-shrink-0 ${className}`} style={{ width: size, height: size }}>
      {inner}
    </div>
  );
}

export default Avatar;
