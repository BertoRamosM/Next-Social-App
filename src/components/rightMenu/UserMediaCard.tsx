import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Land1 from "../../images/land1.webp"

import Land2 from "../../images/land2.webp";

import Land3 from "../../images/land3.webp";

import Land4 from "../../images/land4.webp"

import Land5 from "../../images/land5.webp"

import Land6 from "../../images/land6.webp";
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
            src={Land1}
            alt="media user"
            fill
            className="object-cover rounded-md"
          />
        </div>
      )) :
          'No media found'
  }
      </div>
    </div>
  );
};

export default UserMediaCard