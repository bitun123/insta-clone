// Pages Layer — Post (Dashboard layout page)
// 3-column layout: Sidebar | Feed | RightSidebar

import Sidebar from "../../dashboard/components/Sidebar";
import Feed from "../components/Feed";
import RightSidebar from "../../dashboard/components/RightSidebar";

function Post() {
  return (
    <div className="dashboard-layout">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Center Feed */}
      <main className="dashboard-center">
        <Feed />
      </main>

      {/* Right Sidebar */}
      <RightSidebar />
    </div>
  );
}

export default Post;