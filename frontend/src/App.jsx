import React from "react";
import AppRoutes from "./AppRoutes";

import PostContextProvider from "./features/post/context/PostContextProvider";

function App() {





  return (
  
      <PostContextProvider>
        <AppRoutes />
      </PostContextProvider>
  
  );
}

export default App;
