// Dashboard — PostImage Component

function PostImage({ src, alt = "post" }) {
  return (
    <div className="w-full aspect-square overflow-hidden user-select-none">
      <img
        src={src || `https://picsum.photos/seed/${alt}/800/800`}
        alt={alt}
        className="w-full h-full object-cover block transition-transform duration-300 active:scale-98"
      />
    </div>
  );
}

export default PostImage;
