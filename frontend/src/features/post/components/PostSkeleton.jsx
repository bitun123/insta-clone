const PostSkeleton = () => {
  return (
    <div className="bg-black border-b border-gray-700">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full shimmer" />
          <div className="flex flex-col gap-1.5">
            <div className="h-3 w-24 rounded shimmer" />
            <div className="h-2.5 w-16 rounded shimmer" />
          </div>
        </div>
        <div className="h-6 w-6 rounded shimmer" />
      </div>
      {/* Image */}
      <div className="w-full aspect-square shimmer" />
      {/* Actions */}
      <div className="flex items-center justify-between px-3 pt-2 pb-1">
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 rounded shimmer" />
          <div className="h-6 w-6 rounded shimmer" />
          <div className="h-6 w-6 rounded shimmer" />
        </div>
        <div className="h-6 w-6 rounded shimmer" />
      </div>
      {/* Text lines */}
      <div className="px-4 pb-2">
        <div className="h-3 w-32 rounded shimmer mb-1.5" />
        <div className="h-3 w-52 rounded shimmer mb-1.5" />
        <div className="h-3 w-24 rounded shimmer" />
      </div>
    </div>
  );
};

export default PostSkeleton;