import AddEvent from '@/app/icons/AddEvent';
import LinkIcon from '@/app/icons/LinkIcon';
import LocationIcon from '@/app/icons/LocationIcon';
import SchoolIcon from '@/app/icons/SchoolIcon';
import WorkIcon from '@/app/icons/WorkIcon';
import Link from 'next/link';
import React from 'react'

const UserInfoCard = ({ userId }: { userId:string }) => {
  return (
    <div className="p-4 bg-slate-950 rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className=" flex items-center justify-between foont-md">
        <span className="text-gray-100">User Information</span>
        <Link href="" className="text-red-500 text-xs">
          See all
        </Link>
      </div>

      <div className="flex flex-col gap-4 text-gray-100">
        <div className="flex items-center gap-2">
          <span className="text-xl text-gray-200">Ricardo Mars</span>
          <span className="text-sm">Rich22</span>
        </div>
        <p>
          🌌👽 Meet Rylan Roderick, the coolest Martian on the block! 🌟 📸
          Aspiring intergalactic photographer capturing the wonders of Mars and
          beyond. 🚀 Adventurer exploring the cosmos one planet at a time. 🥤
          Fan of Mars Magic Soda - it tastes out of this world!
        </p>
        <div className=" flex items-center gap-2">
          <LocationIcon />
          <span>
            Living in <b>New Rock</b>
          </span>
        </div>

        <div className=" flex items-center gap-2">
          <SchoolIcon />
          <span>
            Went to <b>Galactic University of Dust</b>
          </span>
        </div>
        <div className=" flex items-center gap-2">
          <WorkIcon />
          <span>
            Works at <b>New Rock</b>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <LinkIcon />
            <Link
              href="https://albertoramos.dev/"
              className="text-red-500 font-medium"
            >
              alberto.ramos
            </Link>
          </div>

          <div className="flex gap-1 items-center">
            <AddEvent />
            <span className="text-xs">Joined August 2074</span>
          </div>
        </div>
        <button className="bg-red-500 text-white text-sm rounded-md p-2">
          Follow
        </button>
        <span className="text-red-800 self-end text-xs cursor-pointer">
          Block User
        </span>
      </div>
    </div>
  );
};

export default UserInfoCard