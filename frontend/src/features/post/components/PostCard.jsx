// Post Feature — PostCard
// Renders a single post using real API data.
// Passes postId down to PostActions for like handling.

import PostHeader from "../../dashboard/components/PostHeader";
import PostImage from "../../dashboard/components/PostImage";
import PostActions from "../../dashboard/components/PostActions";
import { useAuth } from "../../auth/hooks/useAuth";

function PostCard({ post = {} }) {
  const { User } = useAuth();

  const {
    _id,
    user,
    image,
    caption,
    likes = [],
    createdAt,
  } = post;

  const username  = user?.userName  || "unknown";
  const avatarUrl = user?.avatar    || undefined;
  const location  = post.location   || "";
  const likesCount = likes.length;
  
  // The backend populates likes as an array of objects. We check if the current user ID is in it.
  const isLikedByMe = likes.some(like => like.user === User?._id);

  const timestamp = createdAt
    ? new Date(createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric" }).toUpperCase()
    : "";

  return (
    <article 
      className="bg-black border-b border-gray-700 mb-0 pb-1"
      whileHover={{ scale: 1.005 }}
      transition={{ duration: 0.2 }}
    >
      <PostHeader
        username={username}
        location={location}
        avatarSeed={username}
        avatarUrl={avatarUrl}
        postId={_id}
      />
      <PostImage src={image} alt={caption} />
      <PostActions
        postId={_id}
        likes={likesCount}
        isLikedByMe={isLikedByMe}
        username={username}
        caption={caption}
        timestamp={timestamp}
      />
    </article>
  );
}

export default PostCard;
