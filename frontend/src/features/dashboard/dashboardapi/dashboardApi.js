import axios from "axios";
const apiDashboard = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

export async function getComments({ content, postId, parentCommentId }) {
  const response = await apiDashboard.post(`/api/comments/${postId}`, {
    content,
    parentCommentId,
  });
  return response.data;
}

export async function likeComment(commentId) {
  const response = await apiDashboard.post(`/api/comments/likes/${commentId}`);
  return response.data;
}
