
import Link from 'next/link';
import React from 'react'
import MobileMenu from './MobileMenu';
import Image from 'next/image';
import HomeIcon from '@/app/icons/HomeIcon';
import StoriesIcon from '@/app/icons/StoriesIcon';
import FriendsIcon from '@/app/icons/FriendsIcon';
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import LoginIcon from '@/app/icons/LoginIcon';
import UserIcon from '@/app/icons/UserIcon';
import MessageIcon from '@/app/icons/MessageIcon';
import BellIcon from '@/app/icons/BellIcon';

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      <div className="text-red-500 md:hidden lg:block w-20%]">
        <Link href={"/"} className=" font-bold text-xl">
          MARS<span className="border-2 border-red-500">ECHO</span>
        </Link>
      </div>

      <div className="hidden md:flex w-[50%] text-sm">
        <div className="flex gap-6 text-gray-600">
          <Link
            href="#"
            className="flex gap-2 hover:text-red-500 justify-center items-center "
          >
            <HomeIcon />
            <span>Home</span>
          </Link>
          <Link
            href="/friends"
            className="flex gap-2 hover:text-red-500 items-center justify-center"
          >
            <FriendsIcon />
            <span>Friends</span>
          </Link>
          <Link
            href="/stories"
            className="flex gap-2 hover:text-red-500 items-center justify-center"
          >
            <StoriesIcon />
            <span>Stories</span>
          </Link>
        </div>
      </div>

      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <ClerkLoading>
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1s_linear_infinite] dark:text-red-500"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="cursor-pointer">
              <UserIcon />
            </div>
            <div className="cursor-pointer">
              <MessageIcon />
            </div>
            <div className="cursor-pointer">
              <BellIcon />
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="cursor-pointer flex gap-2">
              <LoginIcon />
              <Link href="/login">Login / Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  );
}

export default Navbar