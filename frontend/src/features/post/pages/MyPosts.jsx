// Pages Layer — MyPosts
// Fetches and displays the logged-in user's posts via usePost.
// Styled with framer-motion entry animations

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePost } from "../hooks/usePost";
import PostCard from "../components/PostCard";
import PostSkeleton from "../components/PostSkeleton";

function MyPosts() {
  const { posts, loading, handleGetMyPosts } = usePost();

  useEffect(() => {
    handleGetMyPosts();
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="feed-wrapper"
    >
      {/* Section header */}
      <div style={{
        padding: "14px 0",
        textAlign: "center",
        borderBottom: "1px solid #262626",
        fontWeight: 700,
        fontSize: 16,
        color: "#f5f5f5",
        width: "100%",
        marginBottom: 8
      }}>
        My Posts
      </div>

      <div className="feed-container">
        <AnimatePresence>
          {loading && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <PostSkeleton />
              <PostSkeleton />
              <PostSkeleton />
            </motion.div>
          )}

          {!loading && posts && posts.length > 0 &&
            posts.map((post, index) => (
              <motion.div
                key={post._id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <PostCard post={post} />
              </motion.div>
            ))
          }

          {!loading && (!posts || posts.length === 0) && (
            <motion.div 
              className="feed-empty"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="feed-empty-icon">📸</div>
              <h2 className="feed-empty-title">No posts yet</h2>
              <p className="feed-empty-desc">Share your first photo to get started.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default MyPosts;
