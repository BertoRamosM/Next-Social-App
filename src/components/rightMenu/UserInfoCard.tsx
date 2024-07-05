import AddEvent from '@/app/icons/AddEvent';
import LinkIcon from '@/app/icons/LinkIcon';
import LocationIcon from '@/app/icons/LocationIcon';
import SchoolIcon from '@/app/icons/SchoolIcon';
import WorkIcon from '@/app/icons/WorkIcon';
import prisma from '@/lib/client';
import { auth } from '@clerk/nextjs/server';
import { User } from '@prisma/client';
import Link from 'next/link';
import React from 'react'
import UserInfoCardInteraction from './UserInfoCardInteraction';

const UserInfoCard = async ({ user }: { user: User }) => {
  
  const createdAtDate = new Date(user.createdAt)
  const formattedDate = createdAtDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })


  let isUserBlocked = false;
    let isFollowing = false;
  let isFollowingSent = false;

  const {userId: currentUserId} = auth()

  if (currentUserId) {
    const blockRes = await prisma.block.findFirst({
      where: {
        blockerId: currentUserId,
        blockedId: user.id
      }
    })
    blockRes ? isUserBlocked = true : isUserBlocked = false;

     const followRes = await prisma.follower.findFirst({
       where: {
         followerId: currentUserId,
         followingId: user.id,
       },
     });
     followRes ? (isFollowing = true) : (isFollowing = false);

      const followReqRes = await prisma.followRequest.findFirst({
        where: {
          senderId: currentUserId,
          receiverId: user.id,
        },
      });
      followReqRes ? (isFollowingSent = true) : (isFollowingSent = false);
  }



  return (
    <div className="p-4 bg-slate-950 rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className=" flex items-center justify-between foont-md">
        <span className="text-gray-100">User Information</span>
        <Link href="" className="text-red-500 text-xs">
          See all
        </Link>
      </div>

      <div className="flex flex-col gap-4 text-gray-100">
        <div className="flex items-center gap-2">
          <span className="text-xl text-gray-200">
            {" "}
            {user.name && user.surname
              ? user.name + " " + user.surname
              : user.username}
          </span>
          <span className="text-sm text-gray-200">@{user.username}</span>
        </div>
        {user.description && <p>{user.description}</p>}
        <div className=" flex items-center gap-2">
          <LocationIcon />
          {user.city && (
            <span>
              Living in <b>{user.city}</b>
            </span>
          )}
        </div>

        <div className=" flex items-center gap-2">
          <SchoolIcon />
          {user.school && (
            <span>
              Went to <b>{user.school}</b>
            </span>
          )}
        </div>
        <div className=" flex items-center gap-2">
          <WorkIcon />
          {user.work && (
            <span>
              Works at <b>{user.work}</b>
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          {user.website && (
            <div className="flex gap-1 items-center">
              <LinkIcon />
              <Link
                href="https://albertoramos.dev/"
                className="text-red-500 font-medium"
              >
                {user.website}
              </Link>
            </div>
          )}

          <div className="flex gap-1 items-center">
            <AddEvent />
            <span className="text-xs">Joined {formattedDate}</span>
          </div>
        </div>
        {(currentUserId && currentUserId !== user.id)  &&<UserInfoCardInteraction
          userId={user.id}
          currentUserId={currentUserId}
          isUserBlocked={isUserBlocked}
          isFollowing={isFollowing}
          isFollowingSent={isFollowingSent}
        />}
       
      </div>
    </div>
  );
};

export default UserInfoCard