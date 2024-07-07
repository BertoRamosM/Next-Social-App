import Image from 'next/image';
import React from 'react'
import Avatar from "../../images/avatar.webp"
import { auth } from '@clerk/nextjs/server';
import prisma from '@/lib/client';
import Link from 'next/link';

const ProfileCard = async () => {

  const { userId } = auth()
  
  if (!userId) return null;

  const user = await prisma.user.findFirst({
    where: {
      id:userId
    },
    include: {
      _count: {
        select: {
          followers: true
        }
      }
    }
  })
  console.log(user)

  if(!user) return null

  return (
    <div className="p-4 bg-slate-950 text-white rounded-lg shadow-md text-sm flex flex-col gap-6">
      <Link className="h-20 relative" href={`/profile/${user.username}`}>
        <Image
          src={user?.cover || '/no-cover.webp' }
          alt="user banner"
          fill
          className="rounded-md object-cover"
        />
        <Image
          src={user?.avatar || 'no-avatar.webp'}
          alt="user avatar"
          width={48}
          height={48}
          className="rounded-full w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10 object-cover"
        />
      </Link>
      <div className="h-20 flex flex-col gap-2 items-center">
        <span className="font-semibold">{(user.name && user.surname) ? user.name + " " + user.surname : user.username }</span>
        <div className="flex items-center gap-4">
          <div className="flex">
            <Image
              src={Avatar}
              alt="user avatar"
              width={48}
              height={48}
              className="rounded-full w-3 h-3 object-cover"
            />
            <Image
              src={Avatar}
              alt="user avatar"
              width={48}
              height={48}
              className="rounded-full w-3 h-3 object-cover"
            />
            <Image
              src={Avatar}
              alt="user avatar"
              width={48}
              height={48}
              className="rounded-full w-3 h-3 object-cover"
            />
          </div>

          <span className='text-xs text-gray-500'>{user._count.followers}</span>
        </div>
        <button className='bg-red-500 text-white text-xs p-2 rounded-md pb-2'>My profile</button>
      </div>
    </div>
  );
}

export default ProfileCard