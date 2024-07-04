import AddEvent from '@/app/icons/AddEvent';
import LinkIcon from '@/app/icons/LinkIcon';
import LocationIcon from '@/app/icons/LocationIcon';
import SchoolIcon from '@/app/icons/SchoolIcon';
import WorkIcon from '@/app/icons/WorkIcon';
import { User } from '@prisma/client';
import Link from 'next/link';
import React from 'react'

const UserInfoCard = ({ user }: { user: User }) => {
  
  const createdAtDate = new Date(user.createdAt)
  const formattedDate = createdAtDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
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
          <span className="text-xl text-gray-200">
            {" "}
            {user.name && user.surname
              ? user.name + " " + user.surname
              : user.username}
          </span>
          <span className="text-sm text-gray-200">@{user.username}</span>
        </div>
        {user.description && <p>{user.description}</p>}
        <div className=" flex items-center gap-2">
          <LocationIcon />
          {user.city && (
            <span>
              Living in <b>{user.city}</b>
            </span>
          )}
        </div>

        <div className=" flex items-center gap-2">
          <SchoolIcon />
          {user.school && (
            <span>
              Went to <b>{user.school}</b>
            </span>
          )}
        </div>
        <div className=" flex items-center gap-2">
          <WorkIcon />
          {user.work && (
            <span>
              Works at <b>{user.work}</b>
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          {user.website && (
            <div className="flex gap-1 items-center">
              <LinkIcon />
              <Link
                href="https://albertoramos.dev/"
                className="text-red-500 font-medium"
              >
                {user.website}
              </Link>
            </div>
          )}

          <div className="flex gap-1 items-center">
            <AddEvent />
            <span className="text-xs">Joined {formattedDate}</span>
          </div>
        </div>
        <button className="bg-red-500 text-white text-sm rounded-md p-2">
          Follow
        </button>
        <span className="text-green-400 self-end text-xs cursor-pointer">
          Block User
        </span>
      </div>
    </div>
  );
};

export default UserInfoCard