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
    <div className="stories-wrapper">
      <div className="stories-scroll">
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
