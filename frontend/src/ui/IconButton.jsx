// UI Layer — Shared IconButton component

function IconButton({ children, className = "", title = "", active = false }) {
  return (
    <button
      className={`ui-icon-btn ${active ? "ui-icon-btn--active" : ""} ${className}`}
      title={title}
      type="button"
    >
      {children}
    </button>
  );
}

export default IconButton;
