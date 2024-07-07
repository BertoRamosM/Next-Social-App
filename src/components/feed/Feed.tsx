import React from "react";
import PostComponent from "./Post";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/client";

const Feed = async ({ username }: { username?: string }) => {
  const { userId } = auth();

  let posts:any[] =[];

  if (username) {
    posts = await prisma.post.findMany({
      where: {
        user: {
          username: username,
        },
      },
      include: {
        user: true,
        likes: {
          select: {
            userId: true,
          },
        },
        _count: {
          select: {
            comments: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  if (!username && userId) {
    const following = await prisma.follower.findMany({
      where: {
        followerId: userId,
      },
      select: {
        followingId: true,
      },
    });

    const followingIds = following.map((item) => item.followingId);


    posts = await prisma.post.findMany({
      where: {
        userId: {
          in: followingIds,
        },
      },
      include: {
        user: true,
        likes: {
          select: {
            userId: true,
          },
        },
        _count: {
          select: {
            comments: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  return (
    <div className="p-4 bg-slate-950 text-white shadow-md rounded-lg flex flex-col gap-12">
      {posts?.length ? (posts.map(post => (
        <PostComponent key={post.id} post={post} />
      ))) : 'No posts found!'}
      
    </div>
  );
};

export default Feed;
