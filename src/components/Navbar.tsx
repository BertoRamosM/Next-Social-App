
import Link from 'next/link';
import React from 'react'
import MobileMenu from './MobileMenu';
import Image from 'next/image';
import HomeIcon from '@/app/icons/HomeIcon';
import StoriesIcon from '@/app/icons/StoriesIcon';
import FriendsIcon from '@/app/icons/FriendsIcon';

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      <div className="text-red-500 md:hidden lg:block w-20%]">
        <Link href={"/"} className=" font-bold text-xl">
          BERTO<span className="border-2 border-red-500">SOCIAL</span>
        </Link>
      </div>

      <div className="hidden md:flex w-[50%]">
        <div className="flex gap-6 text-gray-600">
          <Link href="#" className="flex gap-2 hover:text-red-500 justify-center items-center">
            <HomeIcon />
            <span>Home</span>
          </Link>
          <Link href="/friends" className="flex gap-2 hover:text-red-500">
            <FriendsIcon />
            <span>Friends</span>
          </Link>
          <Link href="/stories" className="flex gap-2 hover:text-red-500">
            <StoriesIcon />
            <span>Stories</span>
          </Link>
        </div>
      </div>

      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <MobileMenu />
      </div>
    </div>
  );
}

export default Navbar