'use client'
import { Story, User } from '@prisma/client'
import Image from 'next/image'
import React, { useOptimistic, useState } from 'react'
import Martial1 from "../images/Martial1.webp";
import { useUser } from '@clerk/nextjs';


type StoryWithUser = Story & {
  user: User
}

const StoryList = ({
  stories,
  
}: {
  stories: StoryWithUser[];
  }) => {
  const [storyList, setStoryList] = useState(stories)
  const [img, setImg] = useState<any>()

  const {user} = useUser()

  const [optimisticStories, addOptimisticStory] = useOptimistic(storyList, (state, value:StoryWithUser)=>[value, ...state])



  return (
    <div className="flex flex-col items-center gap-2 cursor-pointer">
      <Image
        src={Martial1}
        alt="User"
        width={80}
        height={80}
        className="w-20 h-20 rounded-full ring-2 ring-red-500"
      />
      <span className="font-medium "></span>
    </div>
  );
};

export default StoryList