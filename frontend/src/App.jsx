import React from "react";
import AppRoutes from "./AppRoutes";

import PostContextProvider from "./features/post/context/PostContextProvider";
import { DashboardContext } from "./features/dashboard/context/dashboardContext";

function App() {





  return (
  
      <PostContextProvider>
        <DashboardContext>
        <AppRoutes />
        </DashboardContext>
      </PostContextProvider>
  
  );
}

export default App;
