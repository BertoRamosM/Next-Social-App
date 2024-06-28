import Image from "next/image";
import React from "react";
import Martial1 from "../images/Martial1.webp";
import Dots from "@/app/icons/Dots";
import Scene1 from "../images/scene1.webp"
import Thumb from "@/app/icons/Thumb";


const Post = () => {
  return (
    <div className=" flex flex-col gap-4 pb-8">
      <div className=" flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={Martial1}
            height={40}
            width={40}
            alt="user image"
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">Rowan Martial</span>
        </div>
        <Dots />
      </div>

      <div className="w-full min-h-96 relative">
        <Image
          src={Scene1}
          alt="scene image"
          fill
          className="rounded-md object-cover"
        />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
        laboriosam in nostrum dolorum, unde, reiciendis laborum omnis qui iure
        molestiae officiis distinctio, dignissimos debitis minima itaque dolor?
        Optio, porro dolorem.
      </p>

      <div className="flex items-center justify-between text-sm gap-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            <Thumb />
            <span className="text-gray-300">|</span>
            <span className="text-gray-300">182</span>
          </div>
        </div>

        <div className=""></div>
      </div>
    </div>
  );
};

export default Post;
