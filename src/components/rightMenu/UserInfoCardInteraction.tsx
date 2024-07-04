"use client";

interface UserInfoCardInteractionProps {
  userId: string;
  currentUserId: string;
  isUserBlocked: boolean;
  isFollowing: boolean;
  isFollowingSent: boolean;
}

const UserInfoCardInteraction: React.FC<UserInfoCardInteractionProps> = ({
  userId,
  currentUserId,
  isUserBlocked,
  isFollowing,
  isFollowingSent,
}) => {
  return (
    <div>
      <button className="bg-red-500 text-white text-sm rounded-md p-2">
        Follow
      </button>
      <span className="text-green-400 self-end text-xs cursor-pointer">
        Block User
      </span>
    </div>
  );
};

export default UserInfoCardInteraction;
