// Dashboard — Sidebar Component

import SidebarItem from "./SidebarItem";
import { useAuth } from "../../auth/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import {
  Home,
  PlusSquare,
  User,
  Menu,
  LogOut
} from "lucide-react";

const NAV_ITEMS = [
  { icon: Home,          label: "Home",          path: "/feed"      },
  { icon: PlusSquare,    label: "Create",        path: "/create-post" },
  { icon: User,          label: "Profile",       path: "/my-posts"  }
];

function Sidebar() {
  const { handleLogout } = useAuth();
  const navigate = useNavigate();

  const handleLogoutClick = async () => {
    try {
      await handleLogout();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <aside className="fixed bottom-0 left-0 w-full h-auto flex flex-row p-0 border-t border-gray-700 bg-black z-50 justify-around items-center md:sticky md:top-0 md:h-screen md:flex-col md:w-[72px] md:px-0 md:items-center md:border-t-0 md:border-r lg:w-[245px] lg:px-3 lg:py-2 lg:pb-5 lg:items-start transition-all duration-300">
      {/* Logo */}
      <div className="hidden lg:flex items-center gap-3 px-3 py-6 cursor-pointer md:flex md:justify-center lg:justify-start">
        <svg
          className="w-7 h-7 text-gray-100"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="4.5" />
          <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
        </svg>
        <span className="text-xl font-bold text-gray-100 tracking-tight md:hidden lg:block">Instagram</span>
      </div>

      {/* Nav Items */}
      <nav className="flex flex-row w-full text-2xl items-center md:flex-col md:gap-0.5 md:flex-1 md:items-center">
        {NAV_ITEMS.map((item) => (
          <SidebarItem
            key={item.label}
            Icon={item.icon}
            label={item.label}
            path={item.path}
            active={item.active || false}
          />
        ))}
        <SidebarItem
          Icon={LogOut}
          label="Logout"
          onClick={handleLogoutClick}
          className="text-red-500 hover:bg-red-900 hover:bg-opacity-10 hidden md:flex"
        />
      </nav>

      {/* More at bottom */}
      <div className="hidden md:block">
        <SidebarItem Icon={Menu} label="More" />
      </div>
    </aside>
  );
}

export default Sidebar;
