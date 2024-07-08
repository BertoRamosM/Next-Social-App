"use client";

import { Story, User } from "@prisma/client";
import Image from "next/image";
import React, { useOptimistic, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { CldUploadWidget } from "next-cloudinary";
import { addStory } from "@/lib/actions";

type StoryWithUser = Story & {
  user: User;
};

const StoryList = ({
  stories,
  userId,
}: {
  stories: StoryWithUser[];
  userId: string;
}) => {
  const [storyList, setStoryList] = useState(stories);
  const [img, setImg] = useState<any>();

  const { user, isLoaded } = useUser();

  const add = async () => {
    if (!img?.secure_url) return;

    addOptimisticStory({
      id: Math.random(),
      img: img.secure_url,
      createdAt: new Date(Date.now()),
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
      userId: userId,
      user: {
        id: userId,
        username: "Sending...",
        avatar: user?.imageUrl || "/no-avatar.webp",
        cover: "",
        description: "",
        name: "",
        surname: "",
        city: "",
        work: "",
        school: "",
        website: "",
        createdAt: new Date(Date.now()),
      },
    });

    try {
      const createdStory = await addStory(img.secure_url);
      setStoryList((prev) => [createdStory!, ...prev]);
      setImg(null);
    } catch (err) {}
  };

 const [optimisticStories, addOptimisticStory] = useOptimistic(
   storyList,
   (state, value: StoryWithUser) => [value, ...state]
 );

  return (
    <>
      <CldUploadWidget
        uploadPreset="marsecho"
        onSuccess={(result, { widget }) => {
          setImg(result.info);
          widget.close();
        }}
      >
        {({ open }) => {
          return (
            <div className="flex flex-col items-center gap-2 cursor-pointer relative">
              <Image
                src={img?.secure_url || user?.imageUrl || "/no-avatar.webp"}
                alt=""
                width={80}
                height={80}
                className="w-20 h-20 rounded-full ring-2 ring-red-500 object-cover z-50"
                onClick={()=>open()}
              />
              {img ? (
                <form onSubmit={add}>
                  <button className="text-xs bg-red-500 text-white p-1 rounded-md">
                    Send
                  </button>
                </form>
              ) : (
                <span className="font-medium ">Add a Story</span>
              )}
              <div className="absolute text-6xl text-red-500 top-1">+</div>
            </div>
          );
        }}
      </CldUploadWidget>
      {storyList.map((story) => (
        <div
          className="flex flex-col items-center gap-2 cursor-pointer"
          key={story.id}
        >
          <Image
             src={story.img || "/no-avatar.webp"}
            alt="User"
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2 ring-red-500 object-cover"
          />
          <span className="font-medium ">
            {story.user.name || story.user.username}
          </span>
        </div>
      ))}
    </>
  );
};

export default StoryList;
