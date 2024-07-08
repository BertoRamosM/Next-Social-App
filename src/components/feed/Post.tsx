import Image from "next/image";
import React, { Suspense } from "react";
import Dots from "@/app/icons/Dots";
import Comments from "./Comments";
import { Post, User } from "@prisma/client";
import PostInteraction from "./PostInteraction";
import PostInfo from "../PostInfo";
import { auth } from "@clerk/nextjs/server";

type PostType = Post & {
  user: User;
  likes: { userId: string }[];
  _count: { comments: number };
};


const PostComponent = ({ post }: { post: PostType }) => {
      const { userId } = auth();

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
            {post.user.name && post.user.surname
              ? post.user.name + " " + post.user.surname
              : post.user.username}
          </span>
        </div>

        <div className="" >
          {userId === post.user.id && <PostInfo postId={post.id} />}
        </div>
      </div>

      {post.img && (
        <div className="w-full min-h-96 relative">
          <Image
            src={post.img}
            alt="scene image"
            fill
            className="rounded-md object-cover"
          />
        </div>
      )}
      <p>{post.desc}</p>

      <Suspense fallback="loading...">
        <PostInteraction
          postId={post.id}
          likes={post.likes.map((like) => like.userId)}
          commentNumber={post._count.comments}
        />

        <Comments postId={post.id} />
      </Suspense>
    </div>
  );
};

export default PostComponent;
