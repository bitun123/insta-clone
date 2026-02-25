import React from "react";
import AppRoutes from "./AppRoutes";
import { AuthProvider } from "./features/auth/context/AuthProvider";
import PostContextProvider from "./features/post/context/postContext";
function App() {
  return (
    <AuthProvider>
      <PostContextProvider>
        <AppRoutes />
      </PostContextProvider>
    </AuthProvider>
  );
}

export default App;
