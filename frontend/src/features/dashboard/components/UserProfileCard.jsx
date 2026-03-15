// Dashboard — UserProfileCard Component

import Avatar from "../../../ui/Avatar";

function UserProfileCard({ username = "satyajit_dev", fullName = "Satyajit", avatarSeed = "satyajit" }) {
  return (
    <div className="right-profile-card">
      <div className="avatar-ring right-profile-avatar-ring">
        <img
          src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${avatarSeed}`}
          alt={username}
          className="post-avatar"
          style={{ width: 44, height: 44 }}
        />
      </div>
      <div className="right-profile-info">
        <span className="right-profile-username">{username}</span>
        <span className="right-profile-fullname">{fullName}</span>
      </div>
      <button className="right-switch-btn" type="button">Switch</button>
    </div>
  );
}

export default UserProfileCard;
