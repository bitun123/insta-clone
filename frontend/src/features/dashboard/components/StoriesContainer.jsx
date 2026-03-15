// Dashboard — StoriesContainer Component

import StoryItem from "./StoryItem";

const STORIES = [
  { username: "alex_dev",    seed: "alex"    },
  { username: "priya.ui",   seed: "priya"   },
  { username: "carlos_99",  seed: "carlos"  },
  { username: "yuki.snap",  seed: "yuki"    },
  { username: "marco_live", seed: "marco"   },
  { username: "sofia_art",  seed: "sofia"   },
  { username: "raj_toons",  seed: "raj"     },
];

function StoriesContainer() {
  return (
    <div className="border-b border-gray-700 bg-black py-4 px-0 mb-0 w-full">
      <div className="flex gap-4 overflow-x-auto px-4 scrollbar-hide">
        {/* Current user's "Your story" */}
        <StoryItem username="your_story" seed="satyajit" isYou />
        {STORIES.map((s) => (
          <StoryItem key={s.username} username={s.username} seed={s.seed} />
        ))}
      </div>
    </div>
  );
}

export default StoriesContainer;
