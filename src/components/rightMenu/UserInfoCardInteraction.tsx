"use client";

import { switchBlock, switchFollow } from "@/lib/actions";
import { useOptimistic, useState } from "react";

interface UserInfoCardInteractionProps {
  userId: string;
  isUserBlocked: boolean;
  isFollowing: boolean;
  isFollowingSent: boolean;
}

const UserInfoCardInteraction: React.FC<UserInfoCardInteractionProps> = ({
  userId,
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
    switchOptimisticState("follow");
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

  const block = async ()=> {
    switchOptimisticState('block')
    try {
      await switchBlock(userId)
      setUserState((prev) => ({
        ...prev, blocked: !prev.blocked
      }
      ))
    } catch (error) {
        console.log(error);
        throw new Error("something went wrong");
    }
  }

  const [optimisticState, switchOptimisticState] = useOptimistic(userState, (state, value: "follow" | 'block') =>
    value === 'follow'
      ? {
    ...state,
    following: state.following && false,
        followingSent: !state.following && !state.followingSent ? true : false,
  } : { ...state,
    blocked: !state.blocked
  }
)
  return (
    <>
      <form action={follow}>
        <button className="w-full bg-red-500 text-green-100 text-sm rounded-md p-2">
          {optimisticState.following
            ? "Following"
            : optimisticState.followingSent
            ? "Follow Request Sent"
            : "Follow"}
        </button>
      </form>
      <form action={block} className="self-end">
        <button className="text-red-400 text-xs cursor-pointer">
          {optimisticState.blocked ? "Unblock User" : "Block User"}
        </button>
      </form>
    </>
  );
};

export default UserInfoCardInteraction;
