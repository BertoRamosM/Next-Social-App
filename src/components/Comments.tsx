import React from 'react'
import Martial3 from "../images/Martial3.webp";
import Image from 'next/image';
import Emoji from "../images/emoji.webp"

const Comments = () => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <Image src={Martial3} alt="user avatar" width={32} height={32} className='w-8 h-8 rounded-full'/>
        <div className="flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
          <input
            type="text"
            placeholder="Write a comment..."
            className="bg-transparent outline-none flex-1"
          />
          <Image src={Emoji} alt="emoji" width={16} height={16} className='rounded-full cursor-pointer'/>
        </div>
      </div>

      <div className=""></div>
    </div>
  );
}

export default Comments