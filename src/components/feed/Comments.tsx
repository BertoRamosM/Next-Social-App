import React from "react";
import Avatar from "../../images/avatar.webp";
import Image from "next/image";
import Emoji from "../../images/emoji.webp";
import Dots from "@/app/icons/Dots";
import Thumb from "@/app/icons/Thumb";

const Comments = () => {
  return (
    <div className="bg-slate-800 p-2 rounded-lg">
      <div className="flex items-center gap-4 ">
        <Image
          src={Avatar}
          alt="user avatar"
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex flex-1 items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full bg-transparent border-2 border-white/30">
          <input
            type="text"
            placeholder="Write a comment..."
            className=" outline-none flex-1 bg-transparent"
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
        <div className="flex gap-4 justify-between mt-6">
          <Image
            src={Avatar}
            alt="user avatar"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col gap-2 flex-1 ">
            <span className="font-medium ">Ricardo Mars</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos officia facilis sit voluptatibus laboriosam tempore
              expedita, tempora rerum et consequatur sed. Quam qui a quaerat
              temporibus architecto corrupti debitis quidem!
            </p>
            <div className="flex items-center gap-8 text-xs text-gray-100">
              <div className="flex items-center gap-4 mt-2 ">
                <Thumb />
                <span className="text-gray-300 "> | </span>
                <span className="text-gray-100">123 Likes</span>
                <div>Reply</div>
              </div>
            </div>
          </div>

          <Dots />
        </div>
      </div>
    </div>
  );
};

export default Comments;
