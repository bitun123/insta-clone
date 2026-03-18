import React from "react";
import AppRoutes from "./AppRoutes";

import PostContextProvider from "./features/post/context/PostContextProvider";
import { DashboardProvider } from "./features/dashboard/context/dashboardContext";

function App() {
  return (
  
      <PostContextProvider>
        <DashboardProvider>
        <AppRoutes />
        </DashboardProvider>
      </PostContextProvider>
  
  );
}

export default App;
