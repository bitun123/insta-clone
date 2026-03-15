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
      className="w-full max-w-[470px] flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <StoriesContainer />
      <div className="w-full max-w-[470px] flex flex-col gap-0">
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
            className="flex flex-col items-center justify-center px-6 py-20 text-gray-400 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-6xl mb-4 opacity-50">📷</div>
            <h2 className="text-2xl font-semibold text-gray-200 mb-2">No posts yet</h2>
            <p className="text-sm text-gray-500">Follow people to see their posts in your feed.</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default Feed;