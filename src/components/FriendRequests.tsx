import Link from 'next/link';
import React from 'react'
import Martial2 from "../images/Martial2.webp";
import Image from 'next/image';
import Tick from '@/app/icons/Tick';
import Cross from '@/app/icons/Cross';


const FriendRequests = () => {
  return (
    <div className="p-4 bg-slate-950 text-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className=" flex items-center justify-between foont-md">
        <span className="text-white">Friend requests</span>
        <Link href="" className="text-red-500 text-xs">
          See all
        </Link>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={Martial2}
            alt="user avatar"
            width={40}
            height={40}
            className="rounded-full object-cover w-10 h-10"
          />
          <span className="font-semibold">Rocky Gomez</span>
        </div>

        <div className="flex justify-end gap-1">
          <Tick />
          <Cross />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={Martial2}
            alt="user avatar"
            width={40}
            height={40}
            className="rounded-full object-cover w-10 h-10"
          />
          <span className="font-semibold">Rocky Gomez</span>
        </div>

        <div className="flex justify-end gap-1">
          <Tick />
          <Cross />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={Martial2}
            alt="user avatar"
            width={40}
            height={40}
            className="rounded-full object-cover w-10 h-10"
          />
          <span className="font-semibold">Rocky Gomez</span>
        </div>

        <div className="flex justify-end gap-1">
          <Tick />
          <Cross />
        </div>
      </div>
    </div>
  );
}

export default FriendRequests