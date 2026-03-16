// Dashboard — UserProfileCard Component

import Avatar from "../../../ui/Avatar";
import { useAuth } from "../../auth/hooks/useAuth";

function UserProfileCard() {
  const { User } = useAuth();
  return (
    <div className="flex items-center gap-3.5 mb-5">
      <div className="p-0.5 rounded-full bg-gradient-to-r from-orange-400 via-red-500 to-pink-500">
        <img
          src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${User?.profileImage}`}
          alt={User?.userName}
          className="w-11 h-11 rounded-full object-cover border-2 border-black block"
        />
      </div>
      <div className="flex flex-col flex-1 min-w-0">
        <span className="text-sm font-semibold text-gray-100 overflow-hidden text-ellipsis whitespace-nowrap">{User?.userName}</span>
        <span className="text-sm font-normal text-gray-600 overflow-hidden text-ellipsis whitespace-nowrap">{User?.fullName}</span>
      </div>
      <button className="bg-none border-none text-blue-400 text-xs font-bold cursor-pointer whitespace-nowrap transition-colors duration-150 hover:text-blue-600" type="button">Switch</button>
    </div>
  );
}

export default UserProfileCard;
