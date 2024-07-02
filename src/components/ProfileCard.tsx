import Image from 'next/image';
import React from 'react'
import Avatar from "../images/avatar.webp"
import Land from "../images/land4.webp"

const ProfileCard = () => {
  return (
    <div className="p-2 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
      <div className="h-20 relative">
        <Image src={Land} alt="user banner" fill className="rounded-md object-cover" />
        <Image src={Avatar} alt="user avatar" width={48} height={48} className="rounded-full w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10 object-cover" />
      </div>
    </div>
  );
}

export default ProfileCard