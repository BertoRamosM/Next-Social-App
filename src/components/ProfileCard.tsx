import Image from 'next/image';
import React from 'react'
import Avatar from "../images/avatar.webp"
import Land from "../images/land4.webp"

const ProfileCard = () => {
  return (
    <div className="p-2 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
      <div className="h-20 relative">
        <Image
          src={Land}
          alt="user banner"
          fill
          className="rounded-md object-cover"
        />
        <Image
          src={Avatar}
          alt="user avatar"
          width={48}
          height={48}
          className="rounded-full w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10 object-cover"
        />
      </div>
      <div className="h-20 flex flex-col gap-2 items-center">
        <span className="font-semibold">Ricardo Mars</span>
        <div className="flex items-center gap-4">
          <div className="flex">
            <Image
              src={Avatar}
              alt="user avatar"
              width={48}
              height={48}
              className="rounded-full w-3 h-3 object-cover"
            />
            <Image
              src={Avatar}
              alt="user avatar"
              width={48}
              height={48}
              className="rounded-full w-3 h-3 object-cover"
            />
            <Image
              src={Avatar}
              alt="user avatar"
              width={48}
              height={48}
              className="rounded-full w-3 h-3 object-cover"
            />
          </div>

          <span className='text-xs text-gray-500'>500 Followers</span>
        </div>
        <button className='bg-red-500 text-white text-xs p-2 rounded-md pb-2'>My profile</button>
      </div>
    </div>
  );
}

export default ProfileCard