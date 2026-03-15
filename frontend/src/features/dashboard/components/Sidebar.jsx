// Dashboard — Sidebar Component

import SidebarItem from "./SidebarItem";
import {
  Home,
  Search,
  Compass,
  MessageCircle,
  Heart,
  PlusSquare,
  User,
  Instagram,
  Menu,
} from "lucide-react";

const NAV_ITEMS = [
  { icon: Home,          label: "Home",          path: "/feed"      },
  { icon: Search,        label: "Search"                            },
  { icon: Compass,       label: "Explore"                           },
  { icon: MessageCircle, label: "Messages"                          },
  { icon: Heart,         label: "Notifications"                     },
  { icon: PlusSquare,    label: "Create",        path: "/create-post" },
  { icon: User,          label: "Profile",       path: "/my-posts"  },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="sidebar-logo">
        <svg
          className="sidebar-logo-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="28"
          height="28"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="4.5" />
          <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
        </svg>
        <span className="sidebar-logo-text">Instagram</span>
      </div>

      {/* Nav Items */}
      <nav className="sidebar-nav">
        {NAV_ITEMS.map((item) => (
          <SidebarItem
            key={item.label}
            Icon={item.icon}
            label={item.label}
            path={item.path}
            active={item.active || false}
          />
        ))}
      </nav>

      {/* More at bottom */}
      <div className="sidebar-footer">
        <SidebarItem Icon={Menu} label="More" />
      </div>
    </aside>
  );
}

export default Sidebar;
