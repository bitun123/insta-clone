// UI Layer — Shared IconButton component

function IconButton({ children, className = "", title = "", active = false }) {
  return (
    <button
      className={`bg-none border-none text-gray-200 cursor-pointer p-1.5 rounded-lg flex items-center justify-center transition-all duration-150 hover:opacity-70 active:scale-85 leading-none ${active ? "text-red-500" : ""} ${className}`}
      title={title}
      type="button"
    >
      {children}
    </button>
  );
}

export default IconButton;
