import { useContext } from "react";
import {
  createPost,
  getFeed,
  likePost,
  getPostDetails,
  getMyPosts,
  unlikePost
} from "../services/post.api";
import { PostContext } from "../context/PostContextProvider";
export const usePost = () => {
  const context = useContext(PostContext);
  const {
    loading,
    setLoading,
    posts,
    setPosts,
    feed,
    setFeed,
    postDetails,
    setpostDetails,
  } = context;

  const handleCreatePost = async ({ image, caption }) => {
    try {
      setLoading(true);
      const response = await createPost({ image, caption });
      return response;
    } catch (error) {
      console.error("Create Post API call failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleGetFeed = async () => {
    try {
      setLoading(true);
      const response = await getFeed();
      setFeed(response.posts);
      return response;
    } catch (error) {
      console.error("Get Feed API call failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLikePost = async (postId) => {
    try {
      const response = await likePost(postId);
      return response;
    } catch (error) {
      console.error("Like Post API call failed:", error);
    }
  };

  const handleGetPostDetails = async (postId) => {
    try {
      const response = await getPostDetails(postId);
      setpostDetails(response.post);
      return response;
    } catch (error) {
      console.error("Get Post Details API call failed:", error);
    }
  };

  const handleGetMyPosts = async () => {
    try {
      setLoading(true);
      const response = await getMyPosts();
      setPosts(response.posts);
      return response;
    } catch (error) {
      console.error("Get My Posts API call failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUnlikePost = async (postId) => {
    try {
      const response = await unlikePost(postId);
      return response;
    } catch (error) {
      console.error("Unlike Post API call failed:", error);
    }
  };

  return {
    loading,
    posts,
    feed,
    postDetails,
    handleCreatePost,
    handleGetFeed,
    handleLikePost,
    handleGetPostDetails,
    handleGetMyPosts,
    handleUnlikePost
  };
};
