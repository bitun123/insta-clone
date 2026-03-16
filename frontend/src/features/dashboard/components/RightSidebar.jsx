// Dashboard — RightSidebar Component

import UserProfileCard from "./UserProfileCard";
import SuggestedUser from "./SuggestedUser";
import { useAuth } from "../../auth/hooks/useAuth";



const FOOTER_LINKS = [
  "About", "Help", "Press", "API", "Jobs",
  "Privacy", "Terms", "Locations", "Language",
];

function RightSidebar() {
  const { User,allUsers } = useAuth();
  const followingList = User?.following || [];

  return (
    <aside className="sticky top-0 h-screen overflow-y-auto px-5 py-6 bg-black scrollbar-hide hidden xl:block">
      {/* Current user */}
      <UserProfileCard />

      {/* Suggestions header */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold text-gray-500">Suggested for you</span>
        <button className="bg-none border-none text-gray-100 text-xs font-bold cursor-pointer transition-opacity duration-150 hover:opacity-70" type="button">See All</button>
      </div>

      {/* Suggested users list */}
      <div className="flex flex-col gap-3.5 mb-6">
        {allUsers.map((user) => {
          const isFollowing = followingList.includes(user._id);
          return (
            <SuggestedUser
              key={user._id}
              userId={user._id}
              username={user.userName}
              subtitle={user.subtitle}
              avatarSeed={user.profileImage}
              isFollowing={isFollowing}
            />
          );
        })}
      </div>

      {/* Footer links */}
      <div className="flex flex-wrap gap-1 mt-4">
        {FOOTER_LINKS.map((link, i) => (
          <span key={link} className="text-xs text-gray-500 cursor-pointer whitespace-nowrap hover:underline">
            {link}
            {i < FOOTER_LINKS.length - 1 && (
              <span className="ml-1 text-gray-500">·</span>
            )}
          </span>
        ))}
        <p className="w-full text-xs text-gray-700 mt-2.5 tracking-widest uppercase">© 2024 INSTAGRAM FROM META</p>
      </div>
    </aside>
  );
}

export default RightSidebar;
