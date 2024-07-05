import Link from 'next/link';
import React from 'react'
import { auth } from '@clerk/nextjs/server';
import prisma from '@/lib/client';
import FriendRequestList from './FriendRequestList';


const FriendRequests = async () => {

const {userId} = auth()

if(!userId) return null

  const requests = await prisma.followRequest.findMany({
    where: {
    receiverId: userId
    },
    include: {
      sender: true,
    }
})

  if(requests.length === 0) return null

  return (
    <div className="p-4 bg-slate-950 text-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className=" flex items-center justify-between foont-md">
        <span className="text-white">Friend requests</span>
        <Link href="" className="text-red-500 text-xs">
          See all
        </Link>
      </div>

      <FriendRequestList requests={requests} />

    </div>
  );
}

export default FriendRequests