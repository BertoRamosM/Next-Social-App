'use client'

import Comment from '@/app/icons/Comment';
import ShareIcon from '@/app/icons/ShareIcon';
import Thumb from '@/app/icons/Thumb';
import React from 'react'

const PostInteraction = ({
  postId,
  likes,
  commentNumber,
}: {
  postId:number,
  likes:string[],
  commentNumber: number
}) => {
  return (
    <div className="flex items-center justify-between text-sm gap-4 my-4">
      <div className="flex gap-8">
        <div className="flex items-center gap-4 bg-slate-800 p-2 rounded-xl cursor-pointer">
          <Thumb />
          <span className="text-gray-300">|</span>
          <span className="text-gray-100">
            182 <span className="hidden md:inline"> Likes</span>
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

export default PostInteraction