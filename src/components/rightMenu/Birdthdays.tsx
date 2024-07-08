import Cross from '@/app/icons/Cross';
import Tick from '@/app/icons/Tick';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Martial1 from "../../images/Martial1.webp";
import CakeIcon from '@/app/icons/CakeIcon';


const Birdthdays = () => {
  return (
    <div className="p-4 bg-slate-950 text-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className=" flex items-center justify-between foont-md">
        <span className="text-white">Birthdays</span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Image
            src={Martial1}
            alt="user avatar"
            width={40}
            height={40}
            className="rounded-full object-cover w-10 h-10"
          />
          <span className="font-semibold">Pumuki</span>
        </div>

        <div className="flex justify-end gap-1">
          <Link
            href=""
            className="bg-red-500 text-white text-xs py-1 rounded-md px-2"
          >
            Celebrate
          </Link>
        </div>
      </div>

      <div className="flex bg-gray-700 gap-4 text-xs justify-center items-center p-4 rounded-lg">
        <div>
          <CakeIcon />
        </div>
        <Link href="" className='flex flex-col gap-2 justify-center'>
          <span className='font-bold text-white'>Upcoming Birthdays</span>
          <span className='text-white'>See other 16 upcoming Birthdays</span>
        </Link>
      </div>
    </div>
  );
}

export default Birdthdays