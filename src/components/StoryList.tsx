'use client'
import { Story, User } from '@prisma/client'
import Image from 'next/image'
import React from 'react'
import Martial1 from "../images/Martial1.webp";


type StoryWithUser = Story & {
  user: User
}

const StoryList = ({
  stories,
  userId,
}: {
  stories: StoryWithUser[];
  userId: string;
}) => {
  return (
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
  );
};

export default StoryList