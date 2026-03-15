// Pages Layer — PostDetails
// Fetches and displays a single post's details via usePost.

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { usePost } from "../hooks/usePost";
import PostHeader from "../../dashboard/components/PostHeader";
import PostImage from "../../dashboard/components/PostImage";
import PostActions from "../../dashboard/components/PostActions";
import PostSkeleton from "../components/PostSkeleton";

function PostDetails() {
  const { postId } = useParams();
  const { postDetails, loading, handleGetPostDetails } = usePost();

  useEffect(() => {
    if (postId) {
      handleGetPostDetails(postId);
    }
  }, [postId]);

  const post = postDetails;
  const username   = post?.user?.username || "";
  const avatarUrl  = post?.user?.avatar   || undefined;
  const location   = post?.location       || "";
  const likes      = post?.likes?.length  || 0;
  const caption    = post?.caption        || "";
  const timestamp  = post?.createdAt
    ? new Date(post.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric" }).toUpperCase()
    : "";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      style={{ display: "flex", justifyContent: "center", width: "100%" }}
    >
      <div style={{ width: "100%", maxWidth: 470 }}>
        <h2 style={{
          fontSize: 16,
          fontWeight: 700,
          color: "#f5f5f5",
          textAlign: "center",
          borderBottom: "1px solid #262626",
          padding: "14px 0",
          marginBottom: 10
        }}>
          Post
        </h2>

        {loading && <PostSkeleton />}

        {!loading && post && (
          <motion.article 
            className="post-card"
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <PostHeader
              username={username}
              location={location}
              avatarSeed={username}
              avatarUrl={avatarUrl}
            />
            <PostImage src={post.image} alt={caption} />
            <PostActions
              postId={post._id}
              likes={likes}
              username={username}
              caption={caption}
              timestamp={timestamp}
            />
          </motion.article>
        )}

        {!loading && !post && (
          <div className="feed-empty">
            <div className="feed-empty-icon">🔍</div>
            <h2 className="feed-empty-title">Post not found</h2>
            <p className="feed-empty-desc">This post may have been deleted.</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default PostDetails;
