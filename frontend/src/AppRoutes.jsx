import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./features/auth/pages/Login";
import Registration from "./features/auth/pages/Registration";
import Protected from "./features/post/components/Protected";

// Layout
import DashboardLayout from "./layouts/DashboardLayout";

// Pages
 // Note: Feed is actually in components, but previous prompt exported it. Need to fix import path!
import PostDetails from "./features/post/pages/PostDetails";
import CreatePost from "./features/post/pages/CreatePost";
import MyPosts from "./features/post/pages/MyPosts";
import Post from "./features/post/pages/Post"; // The old static dashboard root

// Let's import Feed from components since that's where we built it
import FeedComponent from "./features/post/components/Feed";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />

        {/* Protected Dashboard Routes Wrapped in Layout */}
        <Route
          element={
            <Protected>
              <DashboardLayout />
            </Protected>
          }
        >
          {/* Default dashboard route redirects to feed */}
          <Route path="/" element={<Navigate to="/feed" replace />} />
          <Route path="/feed" element={<FeedComponent />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/post/:postId" element={<PostDetails />} />
          <Route path="/my-posts" element={<MyPosts />} />
        </Route>

        {/* Temporary static preview route from old task */}
        <Route path="/dashboard-preview" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;