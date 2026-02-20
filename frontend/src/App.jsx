import React from "react";
import AppRoutes from "./AppRoutes";
import {AuthProvider} from "./features/auth/context/AuthProvider";
function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
