"use client";

interface UserInfoCardInteractionProps {
  userId: string;
  currentUserId: string | any;
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
    <>
      <form action="">
        <button className="w-full bg-red-500 text-green-100 text-sm rounded-md p-2">
          {isFollowing
            ? "Following"
            : isFollowingSent
            ? "Follow Request Sent"
            : "Follow"}
        </button>
      </form>
      <form action="" className="self-end">
        <span className="text-red-400 text-xs cursor-pointer">
          {isUserBlocked ? "Unblock User" : "Block User"}
        </span>
      </form>
    </>
  );
};

export default UserInfoCardInteraction;
