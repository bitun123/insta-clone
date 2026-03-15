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
      initial={{ opacity: 0, y: 2.5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex justify-center w-full"
    >
      <div className="w-full max-w-[470px]">
        <h2 className="text-base font-bold text-gray-100 text-center border-b border-gray-700 py-3.5 mb-2.5">
          Post
        </h2>

        {loading && <PostSkeleton />}

        {!loading && post && (
          <motion.article 
            className="bg-black border-b border-gray-700 mb-0 pb-1"
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
          <div className="flex flex-col items-center justify-center px-6 py-20 text-gray-400 text-center">
            <div className="text-6xl mb-4 opacity-50">🔍</div>
            <h2 className="text-2xl font-semibold text-gray-200 mb-2">Post not found</h2>
            <p className="text-sm text-gray-500">This post may have been deleted.</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default PostDetails;
