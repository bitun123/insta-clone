const PostSkeleton = () => {
  return (
    <div className="post-card skeleton-card">
      {/* Header */}
      <div className="post-header">
        <div className="post-user-info">
          <div className="skeleton skeleton-avatar" />
          <div className="skeleton-lines">
            <div className="skeleton skeleton-line-short" />
            <div className="skeleton skeleton-line-xshort" />
          </div>
        </div>
        <div className="skeleton skeleton-icon" />
      </div>
      {/* Image */}
      <div className="skeleton skeleton-image" />
      {/* Actions */}
      <div className="post-actions">
        <div className="post-actions-left" style={{ gap: "12px" }}>
          <div className="skeleton skeleton-icon" />
          <div className="skeleton skeleton-icon" />
          <div className="skeleton skeleton-icon" />
        </div>
        <div className="skeleton skeleton-icon" />
      </div>
      {/* Text lines */}
      <div style={{ padding: "0 16px 8px" }}>
        <div className="skeleton skeleton-line-medium" style={{ marginBottom: 6 }} />
        <div className="skeleton skeleton-line-long" style={{ marginBottom: 6 }} />
        <div className="skeleton skeleton-line-short" />
      </div>
    </div>
  );
};

export default PostSkeleton;