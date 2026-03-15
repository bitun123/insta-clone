// Dashboard — SidebarItem Component
import { NavLink } from "react-router-dom";

function SidebarItem({ Icon, label, path, active = false, onClick, className = "" }) {
  const content = (
    <>
      <div className="flex items-center justify-center text-gray-100 w-7 text-xl">
        <Icon size={26} strokeWidth={active ? 2.5 : 1.8} />
      </div>
      <span className="text-2xl font-normal text-gray-100 whitespace-nowrap transition-opacity duration-200 hidden lg:block">{label}</span>
    </>
  );

  if (onClick) {
    return (
      <button 
        onClick={onClick}
        className={`flex items-center gap-4  text-2xl px-3 py-3 rounded-lg cursor-pointer transition-all duration-200 user-select-none min-h-12 hover:bg-gray-900 md:justify-center md:min-h-12 sm:h-auto sm:min-h-auto sm:p-2 ${className}`}
      >
        {content}
      </button>
    );
  }

  if (path) {
    return (
      <NavLink 
        to={path} 
        className={({ isActive }) => `flex items-center gap-4 px-3 py-3 rounded-lg cursor-pointer transition-all duration-200 user-select-none min-h-12 hover:bg-gray-900 md:justify-center sm:h-auto sm:min-h-auto sm:p-2 ${isActive ? "" : ""}`}
      >
        {({ isActive }) => (
          <>
            <div className={`flex items-center justify-center w-7 flex-shrink-0 ${isActive ? "text-gray-100" : "text-gray-100"}`}>
              <Icon size={26} strokeWidth={isActive ? 2.5 : 1.8} />
            </div>
            <span className={`text-2xl whitespace-nowrap transition-opacity duration-200 hidden lg:block ${isActive ? "font-bold text-gray-100" : "font-normal text-gray-100"}`}>{label}</span>
          </>
        )}
      </NavLink>
    );
  }

  return (
    <div className={`flex items-center gap-4 px-3 py-3 rounded-lg cursor-pointer transition-all duration-200 user-select-none min-h-12 hover:bg-gray-900 md:justify-center sm:h-auto sm:min-h-auto sm:p-2 ${active ? "" : ""}`}>
      {content}
    </div>
  );
}

export default SidebarItem;
