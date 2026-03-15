// Dashboard — PostImage Component

function PostImage({ src, alt = "post" }) {
  return (
    <div className="post-image-wrapper">
      <img
        src={src || "https://picsum.photos/seed/insta/600/600"}
        alt={alt}
        className="post-image"
      />
    </div>
  );
}

export default PostImage;
