// Dashboard — SidebarItem Component
import { NavLink } from "react-router-dom";

function SidebarItem({ Icon, label, path, active = false }) {
  const content = (
    <>
      <div className="sidebar-item-icon">
        <Icon size={26} strokeWidth={active ? 2.5 : 1.8} />
      </div>
      <span className="sidebar-item-label">{label}</span>
    </>
  );

  if (path) {
    return (
      <NavLink 
        to={path} 
        className={({ isActive }) => `sidebar-item ${isActive ? "sidebar-item--active" : ""}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        {content}
      </NavLink>
    );
  }

  return (
    <div className={`sidebar-item ${active ? "sidebar-item--active" : ""}`}>
      {content}
    </div>
  );
}

export default SidebarItem;
