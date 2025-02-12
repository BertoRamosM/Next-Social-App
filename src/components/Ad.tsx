import Image from 'next/image';
import React from 'react'
import AdImage from "../images/add.webp"
import Dots from '@/app/icons/Dots';

const Ad = ({size}: {size: 'sm' | 'md' | 'lg' }) => {
  return (
    <div className="p-4 bg-slate-950 text-white rounded-lg shadow-md text-sm text-pretty">
      <div className="flex items-center justify-between text-gray-700 font-medium">
        <span className="">Sponsored Ads</span>
        <Dots />
      </div>

      <div
        className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}  `}
      >
        <div
          className={`relative w-full ${
            size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"
          }`}
        >
          <Image
            src={AdImage}
            alt="add image"
            fill
            className="object-cover rounded-lg"
          />
          ;
        </div>
        <div className="flex items-center gap-4">
          <Image
            src={AdImage}
            alt="add image"
            height={24}
            width={24}
            className="object-cover rounded-full w-6 h-6"
          />
          <span className="text-red-500 font-medium">Mars Magic Soda</span>
        </div>

        <p className={size === "sm" ? "text-xs" : "text-sm"}>
          100% Mars slug, Taste Out of This World!
        </p>

        <button className="bg-green-300 text-gray-900 p-2 text-xs rounded-lg">
          Buy now!
        </button>
      </div>
    </div>
  );
}




export default Ad