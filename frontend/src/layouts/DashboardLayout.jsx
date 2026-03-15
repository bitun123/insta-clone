// Layouts Layer — DashboardLayout
// Wraps all page content with the persistent left Sidebar and right Sidebar

import Sidebar from "../features/dashboard/components/Sidebar";
import RightSidebar from "../features/dashboard/components/RightSidebar";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      {/* Left Sidebar (Global Navigation) */}
      <Sidebar />

      {/* Center Feed Component Area */}
      <main className="dashboard-center">
        <Outlet />
      </main>

      {/* Right Sidebar (Suggestions & Profile) */}
      <RightSidebar />
    </div>
  );
}

export default DashboardLayout;
