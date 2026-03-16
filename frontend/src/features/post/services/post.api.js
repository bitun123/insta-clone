import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/post",
  withCredentials: true,
});

export async function createPost({ image, caption }) {
  const formData = new FormData();
  formData.append("image", image); // file
  formData.append("caption", caption);

  const response = await api.post("/", formData);
  return response.data;
}

export async function getFeed() {
  const response = await api.get("/feed");
  return response.data;
}

export async function likePost(postId) {
  const response = await api.post(`/likes/${postId}`);
  return response.data;
}


export async function getPostDetails(postId) {
  const response = await api.get(`/details/${postId}`);
  return response.data;
}


export async function getMyPosts() {
  const response = await api.get("/feed"); // Assuming /feed gets user posts dynamically based on auth in original setup
  return response.data;
}

export async function unlikePost(postId) {
  const response = await api.delete(`/likes/${postId}`);
  return response.data;
}


export async function deletePost(postId) {
  try {
    console.log("API: Deleting post with ID:", postId);
    const response = await api.delete(`/${postId}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to delete the post. Please try again.", error.message);
  }
}
