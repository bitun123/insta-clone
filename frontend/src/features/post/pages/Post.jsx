// Pages Layer — Post (Dashboard layout page)
// 3-column layout: Sidebar | Feed | RightSidebar

import Sidebar from "../../dashboard/components/Sidebar";
import Feed from "../components/Feed";
import RightSidebar from "../../dashboard/components/RightSidebar";

function Post() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[72px_1fr] lg:grid-cols-[245px_1fr] xl:grid-cols-[245px_1fr_335px] min-h-screen max-w-[1300px] mx-auto relative transition-all duration-300">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Center Feed */}
      <main className="border-l border-r border-gray-700 min-h-screen flex flex-col items-center pt-2 w-full sm:border-0">
        <Feed />
      </main>

      {/* Right Sidebar */}
      <RightSidebar />
    </div>
  );
}

export default Post;