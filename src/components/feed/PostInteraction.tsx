"use client";

import Comment from "@/app/icons/Comment";
import ShareIcon from "@/app/icons/ShareIcon";
import Thumb from "@/app/icons/Thumb";
import ThumbFull from "@/app/icons/ThumbFull";
import { switchLike } from "@/lib/actions";
import { useAuth } from "@clerk/nextjs";
import React, { useOptimistic, useState } from "react";

const PostInteraction = ({
  postId,
  likes,
  commentNumber,
}: {
  postId: number;
  likes: string[];
  commentNumber: number;
}) => {
  const { isLoaded, userId } = useAuth();

  const [likeState, setLikeState] = useState({
    likeCount: likes.length,
    isLiked: userId ? likes.includes(userId) : false,
  });

  const [optimisticLike, switchoptimisticLike] = useOptimistic(
    likeState,
    (state, value) => {
      return {
        likeCount: state.isLiked ? state.likeCount - 1 : state.likeCount + 1,
        isLiked: !state.isLiked,
      };
    }
  );

  const likeAction = async () => {
    switchoptimisticLike("");
    try {
      switchLike(postId);
      setLikeState((state) => ({
        likeCount: state.isLiked ? state.likeCount - 1 : state.likeCount + 1,
        isLiked: !state.isLiked,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between text-sm gap-4 my-4">
      <div className="flex gap-8">
        <div className="flex items-center justify-center gap-4 bg-slate-800 p-2 rounded-xl cursor-pointer">
          <form action={likeAction}>
            <button>
              {optimisticLike.isLiked ? <ThumbFull /> : <Thumb />}
            </button>
          </form>
          <span className="text-gray-300">|</span>
          <span className="text-gray-100">
            {optimisticLike.likeCount}{" "}
            <span className="hidden md:inline"> Likes</span>
          </span>
        </div>
        <div className="flex items-center gap-4 bg-slate-800 p-2 rounded-xl cursor-pointer">
          <Comment />
          <span className="text-gray-300">|</span>
          <span className="text-gray-100">
            20 <span className="hidden md:inline"> Comments</span>
          </span>
        </div>
      </div>

      <div className="">
        <div className="flex items-center gap-4 bg-slate-800 p-2 rounded-xl cursor-pointer">
          <ShareIcon />
          <span className="text-gray-300">|</span>
          <span className="text-gray-100">
            <span className="hidden md:inline"> Share</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostInteraction;
