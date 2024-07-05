"use client";

import { switchFollow } from "@/lib/actions";
import { useOptimistic, useState } from "react";

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

  const [userState, setUserState] = useState({
    following: isFollowing,
    blocked: isUserBlocked,
    followingSent: isFollowingSent
  })

  const follow = async () => {
    switchOptimisticFollow('')
    try {
      await switchFollow(userId)
      setUserState(prev => ({
        ...prev,
        following: prev.following && false,
        followingSent: !prev.following && !prev.followingSent ? true : false,

      }))
    } catch (error) {
      console.log(error)
      throw new Error('something went wrong')
    }
  }

  const [optimisticFollow, switchOptimisticFollow] = useOptimistic(userState, (state) => ({
    ...state,
    following: state.following && false,
        followingSent: !state.following && !state.followingSent ? true : false,
    
  })
)
  return (
    <>
      <form action={follow}>
        <button className="w-full bg-red-500 text-green-100 text-sm rounded-md p-2">
          {optimisticFollow.following
            ? "Following"
            : optimisticFollow.followingSent
            ? "Follow Request Sent"
            : "Follow"}
        </button>
      </form>
      <form action="" className="self-end">
        <span className="text-red-400 text-xs cursor-pointer">
          {optimisticFollow.blocked ? "Unblock User" : "Block User"}
        </span>
      </form>
    </>
  );
};

export default UserInfoCardInteraction;
