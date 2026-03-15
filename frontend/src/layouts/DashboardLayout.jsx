// Layouts Layer — DashboardLayout
// Wraps all page content with the persistent left Sidebar and right Sidebar

import Sidebar from "../features/dashboard/components/Sidebar";
import RightSidebar from "../features/dashboard/components/RightSidebar";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[72px_1fr] lg:grid-cols-[245px_1fr_335px] min-h-screen max-w-[1300px] mx-auto relative transition-all duration-300">
      {/* Left Sidebar (Global Navigation) */}
      <Sidebar />

      {/* Center Feed Component Area */}
      <main className="border-l border-r border-gray-700 min-h-screen flex flex-col items-center pt-2 w-full sm:border-0">
        <Outlet />
      </main>

      {/* Right Sidebar (Suggestions & Profile) */}
      <RightSidebar />
    </div>
  );
}

export default DashboardLayout;
