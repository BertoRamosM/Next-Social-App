import RightMenu from "@/components/rightMenu/RightMenu";
import Image from "next/image";
import React from "react";
import Avatar from "../../../images/avatar.webp";
import Hero from "../../../images/land3.webp";
import prisma from "@/lib/client";
import { notFound } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import LeftMenu from "@/components/leftMenu/LeftMenu";
import Feed from "@/components/feed/Feed";

const ProfilePage = async ({ params }: { params: { username: string } }) => {
  const username = params.username;

  const user = await prisma.user.findFirst({
    where: {
      username,
    },
    include: {
      _count: {
        select: {
          followers: true,
          followings: true,
          posts: true,
        },
      },
    },
  });

  //from nextjs navigation
  if (!user) return notFound();

  const { userId: currentUserId } = auth();

  let isBlock;

  if (currentUserId) {
    const res = await prisma.block.findFirst({
      where: {
        blockerId: user.id,
        blockedId: currentUserId,
      },
    });

    if (res) {
      isBlock = true;
    } else {
      isBlock = false;
    }
  }

  if (isBlock) return notFound();

  return (
    <div className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="home" />
      </div>
      <div className="w-full lg:w-[70%] xl-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-64 relative">
              <Image
                src={user.cover || "/no-cover.webp"}
                alt={user.username + "cover"}
                fill
                className="object-cover rounded-md"
              />
              <Image
                src={user.avatar || "/no-avatar.webp"}
                alt={user.username + "avatar"}
                width={128}
                height={128}
                className="object-cover w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-green-300"
              />
            </div>
            <h1 className="mt-20 mb-4 text-2xl font-medium">
              {user.name && user.surname
                ? user.name + " " + user.surname
                : user.username}
            </h1>
            <div className="flex items-center justify-center gap-12 mb-4">
              <div className="flex flex-col items-center">
                <span className="font-medium">{user._count.posts}</span>
                <span className="text-sm">Posts</span>
              </div>

              <div className="flex flex-col items-center">
                <span className="font-medium">{user._count.followers}</span>
                <span className="text-sm">Followers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">{user._count.followings}</span>
                <span className="text-sm">Following</span>
              </div>
            </div>
          </div>
          <Feed />
        </div>
      </div>

      <div className="hidden lg:block w-[30%] ">
        <RightMenu user={user} />
      </div>
    </div>
  );
};

export default ProfilePage;
