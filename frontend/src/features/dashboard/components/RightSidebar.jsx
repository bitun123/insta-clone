// Dashboard — RightSidebar Component

import UserProfileCard from "./UserProfileCard";
import SuggestedUser from "./SuggestedUser";
import { useAuth } from "../../auth/hooks/useAuth";

const SUGGESTED = [
  { userId: "650a1b2c3d4e5f6001122334", username: "alex_dev",    subtitle: "Followed by priya.ui",   seed: "alex"    },
  { userId: "650a1b2c3d4e5f6001122335", username: "priya.ui",   subtitle: "New to Instagram",         seed: "priya"   },
  { userId: "650a1b2c3d4e5f6001122336", username: "carlos_99",  subtitle: "Followed by marco_live",   seed: "carlos"  },
  { userId: "650a1b2c3d4e5f6001122337", username: "yuki.snap",  subtitle: "New to Instagram",         seed: "yuki"    },
  { userId: "650a1b2c3d4e5f6001122338", username: "sofia_art",  subtitle: "Followed by raj_toons",    seed: "sofia"   },
];

const FOOTER_LINKS = [
  "About", "Help", "Press", "API", "Jobs",
  "Privacy", "Terms", "Locations", "Language",
];

function RightSidebar() {
  const { User } = useAuth();
  const followingList = User?.following || [];

  return (
    <aside className="right-sidebar">
      {/* Current user */}
      <UserProfileCard />

      {/* Suggestions header */}
      <div className="suggested-header">
        <span className="suggested-title">Suggested for you</span>
        <button className="suggested-see-all" type="button">See All</button>
      </div>

      {/* Suggested users list */}
      <div className="suggested-list">
        {SUGGESTED.map((user) => {
          const isFollowing = followingList.includes(user.userId);
          return (
            <SuggestedUser
              key={user.username}
              userId={user.userId}
              username={user.username}
              subtitle={user.subtitle}
              avatarSeed={user.seed}
              isFollowing={isFollowing}
            />
          );
        })}
      </div>

      {/* Footer links */}
      <div className="right-footer">
        {FOOTER_LINKS.map((link, i) => (
          <span key={link} className="right-footer-link">
            {link}
            {i < FOOTER_LINKS.length - 1 && (
              <span className="right-footer-dot">·</span>
            )}
          </span>
        ))}
        <p className="right-footer-copy">© 2024 INSTAGRAM FROM META</p>
      </div>
    </aside>
  );
}

export default RightSidebar;
