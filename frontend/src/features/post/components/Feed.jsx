// Post Feature — Feed
// Fetches the feed on mount via usePost hook, shows skeleton while loading
// Uses framer-motion for page transition

import { useEffect } from "react";
import { motion } from "framer-motion";
import StoriesContainer from "../../dashboard/components/StoriesContainer";
import PostCard from "./PostCard";
import PostSkeleton from "./PostSkeleton";
import { usePost } from "../hooks/usePost";

function Feed() {
  const { feed, loading, handleGetFeed } = usePost();

  useEffect(() => {
    handleGetFeed();
  }, []);

  return (
    <motion.div 
      className="feed-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <StoriesContainer />
      <div className="feed-container">
        {loading && (
          <>
            <PostSkeleton />
            <PostSkeleton />
            <PostSkeleton />
          </>
        )}
        
        {!loading && feed && feed.length > 0 &&
          feed.map((post, index) => (
            <motion.div
              key={post._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <PostCard post={post} />
            </motion.div>
          ))
        }

        {!loading && (!feed || feed.length === 0) && (
          <motion.div 
            className="feed-empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="feed-empty-icon">📷</div>
            <h2 className="feed-empty-title">No posts yet</h2>
            <p className="feed-empty-desc">Follow people to see their posts in your feed.</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default Feed;