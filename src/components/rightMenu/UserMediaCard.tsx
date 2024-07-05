import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { User } from '@prisma/client';
import prisma from '@/lib/client';

const UserMediaCard = async ({ user }: { user: User }) => {

  const postsWithMedia = await prisma.post.findMany({
    where: {
      userId: user.id,
      img: {
        not: null,
      },
    },
    take: 8,
    orderBy: {
      createdAt: 'desc'
    }
  })

  return (
    <div className="p-4 bg-slate-950 rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className=" flex items-center justify-between font-md">
        <span className="text-gray-100">User Media</span>
        <Link href="" className="text-red-500 text-xs">
          See all
        </Link>
      </div>

      <div className="flex gap-4 justify-between flex-wrap">
      {postsWithMedia.length ? postsWithMedia.map(post => (
        <div className="relative w-1/5 h-24" key={post.id}>
          <Image
            src={post.img!}
            alt="media user"
            fill
            className="object-cover rounded-md"
          />
        </div>
      )) :
          'No media posted yet'
  }
      </div>
    </div>
  );
};

export default UserMediaCard