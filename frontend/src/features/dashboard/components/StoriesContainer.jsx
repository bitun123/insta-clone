// Dashboard — StoriesContainer Component

import { useAuth } from "../../auth/hooks/useAuth";
import StoryItem from "./StoryItem";


function StoriesContainer() {
const { allUsers } = useAuth();
  return (
    <div className="border-b border-gray-700 bg-black py-4 px-0 mb-0 w-full">
      <div className="flex gap-4 overflow-x-auto px-4 scrollbar-hide">
        {/* Current user's "Your story" */}
        <StoryItem username="your_story" seed="satyajit" isYou />
        {allUsers.map((user) => (
          <StoryItem key={user._id} username={user.userName} seed={user.profileImage} />
        ))}
      </div>
    </div>
  );
}

export default StoriesContainer;
