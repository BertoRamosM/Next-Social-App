import Image from 'next/image'
import React from 'react'
import AddStory from "../images/addStory.webp";
import Martial1 from "../images/Martial1.webp"
import Martial2 from "../images/Martial2.webp";
import Martial3 from "../images/Martial3.webp";
import Martial4 from "../images/Martial4.webp";
import prisma from '@/lib/client';
import { auth } from '@clerk/nextjs/server';


const Stories = async () => {
  const { userId: currentUserId } = auth();

  if (!currentUserId) return null
  
    const stories = await prisma.story.findMany({
      where: {
        expiresAt: {
          gt: new Date(),
        },
        OR: [
          {
            user: {
              followers: {
                some: {
                  followerId: currentUserId,
                },
              },
            },
          },
        ],
      },
    });
  return (
    <div className="p-4 bg-slate-950 text-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide">
      <div className="flex gap-8 w-max">
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src={Martial1}
            alt="User"
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2 ring-red-500"
          />
          <span className="font-medium ">Ricky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src={Martial2}
            alt="User"
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2 ring-red-500"
          />
          <span className="font-medium ">Rocky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src={Martial3}
            alt="User"
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2 ring-red-500"
          />
          <span className="font-medium ">Rachel</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src={Martial4}
            alt="User"
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2 ring-red-500"
          />
          <span className="font-medium ">Brad</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src={Martial1}
            alt="User"
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2 ring-red-500"
          />
          <span className="font-medium ">Ricky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src={Martial2}
            alt="User"
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2 ring-red-500"
          />
          <span className="font-medium ">Rocky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src={Martial3}
            alt="User"
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2 ring-red-500"
          />
          <span className="font-medium ">Rachel</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src={Martial4}
            alt="User"
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2 ring-red-500"
          />
          <span className="font-medium ">Brad</span>
        </div>
          <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src={Martial1}
            alt="User"
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2 ring-red-500"
          />
          <span className="font-medium ">Ricky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src={Martial2}
            alt="User"
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2 ring-red-500"
          />
          <span className="font-medium ">Rocky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src={Martial3}
            alt="User"
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2 ring-red-500"
          />
          <span className="font-medium ">Rachel</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src={Martial4}
            alt="User"
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2 ring-red-500"
          />
          <span className="font-medium ">Brad</span>
        </div>
          <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src={Martial1}
            alt="User"
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2 ring-red-500"
          />
          <span className="font-medium ">Ricky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src={Martial2}
            alt="User"
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2 ring-red-500"
          />
          <span className="font-medium ">Rocky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src={Martial3}
            alt="User"
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2 ring-red-500"
          />
          <span className="font-medium ">Rachel</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src={Martial4}
            alt="User"
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2 ring-red-500"
          />
          <span className="font-medium ">Brad</span>
        </div>

        
      </div>
    </div>
  );
}

export default Stories