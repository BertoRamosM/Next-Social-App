
import Link from 'next/link';
import React from 'react'
import MobileMenu from './MobileMenu';

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      <div className="">
        <Link href={"/"} className="text-red-500 font-bold text-xl">
          BERTO<span className='border-2 border-red-500'>SOCIAL</span>
        </Link>
      </div>

      <div className="hidden"></div>

      <div className="">
        <MobileMenu />
      </div>
    </div>
  );
}

export default Navbar