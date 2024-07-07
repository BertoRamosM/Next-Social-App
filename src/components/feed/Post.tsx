import Image from "next/image";
import React from "react";
import Martial1 from "../../images/Martial1.webp";
import Dots from "@/app/icons/Dots";
import Land1 from "../../images/land2.webp";
import Thumb from "@/app/icons/Thumb";
import Comment from "@/app/icons/Comment";
import ShareIcon from "@/app/icons/ShareIcon";
import Comments from "./Comments";
import { Post, User } from "@prisma/client";

type PostType = Post & {
  user: User;
  likes: { userId: string }[];
  _count: { comments: number };
};


const PostComponent = ({ post }: { post: PostType }) => {
  return (
    <div className=" flex flex-col gap-4 pb-8">
      <div className=" flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={post.user.avatar || "/no-avatar.webp"}
            height={40}
            width={40}
            alt="user image"
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">
            {post.user.name && post.user.surname ? post.user.name + " " + post.user.surname : post.user.username}
          </span>
        </div>
        <Dots />
      </div>

     {post.img &&  <div className="w-full min-h-96 relative">
        <Image
          src={post.img}
          alt="scene image"
          fill
          className="rounded-md object-cover"
        />
      </div>}
      <p>
        {post.desc}
      </p>

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
              12 <span className="hidden md:inline"> Shares</span>
            </span>
          </div>
        </div>
      </div>

      <Comments />
    </div>
  );
};

export default PostComponent;
