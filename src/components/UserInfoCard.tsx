import LocationIcon from '@/app/icons/LocationIcon';
import SchoolIcon from '@/app/icons/SchoolIcon';
import WorkIcon from '@/app/icons/WorkIcon';
import Link from 'next/link';
import React from 'react'

const UserInfoCard = ({ userId }: { userId:string }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className=" flex items-center justify-between foont-md">
        <span className="text-gray-500">User Information</span>
        <Link href="" className="text-red-500 text-xs">
          See all
        </Link>
      </div>

      <div className="flex flex-col gap-4 text-gray-600">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">Rylan Roderick</span>
          <span className="text-sm">Rylan52</span>
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
      </div>
    </div>
  );
};

export default UserInfoCard