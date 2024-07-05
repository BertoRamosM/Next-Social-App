'use client'
import Martial2 from "../../images/Martial2.webp";


import Cross from '@/app/icons/Cross'
import Tick from '@/app/icons/Tick'
import { FollowRequest, User } from "@prisma/client";
import Image from 'next/image'
import React from 'react'


type RequestWithUser = FollowRequest & {
  sender: User
}

const FriendRequestList = ({ requests }: { requests: RequestWithUser[] }) => {
  return (
    <div>
      {requests.map((request) => (
        <div className="flex items-center justify-between" key={request.id}>
          <div className="flex items-center gap-4">
            <Image
              src={Martial2}
              alt="user avatar"
              width={40}
              height={40}
              className="rounded-full object-cover w-10 h-10"
            />
            <span className="font-semibold">{request.sender.name}</span>
          </div>

          <div className="flex justify-end gap-1">
            <Tick />
            <Cross />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FriendRequestList