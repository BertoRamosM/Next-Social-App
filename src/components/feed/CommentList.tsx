"use client";

import Dots from "@/app/icons/Dots";
import Thumb from "@/app/icons/Thumb";
import Image from "next/image";
import React, { useState } from "react";
import Emoji from "../../images/emoji.webp";
import { Comment, User } from "@prisma/client";
import { useUser } from "@clerk/nextjs";

type CommentWithUsers = Comment & { user: User };

const CommentList = ({
  comments,
  postId,
}: {
  comments: CommentWithUsers[];
  postId: number;
}) => {
  const { user } = useUser();

  const [commentState, setCommentState] = useState(comments);
  const [desc, setDesc] = useState("");

  const [optimisticComments, addOptimisticComments] = useState(commentState);

  return (
    <>
      {user && (
        <div className="flex items-center gap-4 ">
          <Image
            src={user.imageUrl || "no-avatar.webp"}
            alt="user avatar"
            width={32}
            height={32}
            className="w-8 h-8 rounded-full"
          />
          <form
            action="#"
            className="flex flex-1 items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full bg-transparent border-2 border-white/30"
          >
            <input
              type="text"
              placeholder="Write a comment..."
              className="outline-none flex-1 bg-transparent"
              onChange={(e) => setDesc(e.target.value)}
            />
            <Image
              src={Emoji}
              alt="emoji"
              width={16}
              height={16}
              className="rounded-full cursor-pointer"
            />
          </form>
        </div>
      )}
      <div className="">
        {optimisticComments.map((comment) => (
          <div className="flex gap-4 justify-between mt-6" key={comment.id}>
            <Image
              src={comment.user.avatar || "no-avatar.webp"}
              alt="user avatar"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex flex-col gap-2 flex-1">
              <span className="font-medium ">
                {comment.user.name && comment.user.surname
                  ? comment.user.name + " " + comment.user.surname
                  : comment.user.username}
              </span>
              <p>{comment.desc}</p>
              <div className="flex items-center gap-8 text-xs text-gray-100">
                <div className="flex items-center gap-4 mt-2">
                  <Thumb />
                  <span className="text-gray-300"> | </span>
                  <span className="text-gray-100">0 Likes</span>
                  <div>Reply</div>
                </div>
              </div>
            </div>
            <Dots />
          </div>
        ))}
      </div>
    </>
  );
};

export default CommentList;
