import React from 'react'
import Avatar from "../images/avatar.webp";
import Image from 'next/image';
import Emoji from "../images/emoji.webp"
import Dots from '@/app/icons/Dots';

const Comments = () => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <Image
          src={Avatar}
          alt="user avatar"
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex flex-1 items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
          <input
            type="text"
            placeholder="Write a comment..."
            className="bg-transparent outline-none flex-1"
          />
          <Image
            src={Emoji}
            alt="emoji"
            width={16}
            height={16}
            className="rounded-full cursor-pointer"
          />
        </div>
      </div>

      <div className="">
        <div className="">
          <Image
            src={Avatar}
            alt="user avatar"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <div className=""></div>


          <Dots />
        </div>
      </div>
    </div>
  );
}

export default Comments