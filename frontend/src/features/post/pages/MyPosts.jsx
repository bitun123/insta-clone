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
      className="w-full max-w-[470px] flex flex-col"
    >
      {/* Section header */}
      <div className="py-3.5 text-center border-b border-gray-700 font-bold text-base text-gray-100 w-full mb-2">
        My Posts
      </div>

      <div className="w-full grid grid-cols-3 gap-1">
        <AnimatePresence>
          {loading && (
            Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="aspect-square shimmer rounded-sm" />
            ))
          )}

          {!loading && posts && posts.length > 0 &&
            posts.map((post, index) => (
              <motion.div
                key={post._id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="aspect-square overflow-hidden bg-gray-900 cursor-pointer hover:opacity-90 transition-opacity"
              >
                <img 
                  src={post.image || `https://picsum.photos/seed/${post._id}/300/300`} 
                  alt={post.caption}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))
          }

          {!loading && (!posts || posts.length === 0) && (
            <motion.div 
              className="col-span-3 flex flex-col items-center justify-center px-6 py-20 text-gray-400 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="text-6xl mb-4 opacity-50">📸</div>
              <h2 className="text-2xl font-semibold text-gray-200 mb-2">No posts yet</h2>
              <p className="text-sm text-gray-500">Share your first photo to get started.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default MyPosts;
