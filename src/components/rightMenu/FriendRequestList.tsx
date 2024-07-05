'use client'
import Martial2 from "../../images/Martial2.webp";


import Cross from '@/app/icons/Cross'
import Tick from '@/app/icons/Tick'
import { acceptFollowRequest, declineFollowRequest } from "@/lib/actions";
import { FollowRequest, User } from "@prisma/client";
import Image from 'next/image'
import React, { useOptimistic, useState } from 'react'


type RequestWithUser = FollowRequest & {
  sender: User
}

const FriendRequestList = ({ requests }: { requests: RequestWithUser[] }) => {


  const [requestState, setRequestState] = useState(requests)

  const accept = async (requestId: number, userId: string) => {
    removeOptimisticRequest(requestId);
    try {
      await acceptFollowRequest(userId);
      setRequestState((prev) => prev.filter((req) => req.id !== requestId));
    } catch (error) {
      console.log(error);
    }
  };

   const decline = async (requestId: number, userId: string) => {
     removeOptimisticRequest(requestId);
     try {
       await declineFollowRequest(userId);
       setRequestState((prev) => prev.filter((req) => req.id !== requestId));
     } catch (error) {
       console.log(error);
     }
   };


  const [optimisticRequest, removeOptimisticRequest] = useOptimistic(requestState, (state, value: number)=>state.filter(req=>req.id !== value))


  return (
    <div className="flex flex-col gap-4">
      {optimisticRequest.map((request) => (
        <div className="flex items-center justify-between" key={request.id}>
          <div className="flex items-center gap-4">
            <Image
              src={request.sender.avatar || "/no-avatar.webp"}
              alt="user avatar"
              width={40}
              height={40}
              className="rounded-full object-cover w-10 h-10"
            />
            <span className="font-semibold">
              {request.sender.name && request.sender.surname
                ? request.sender.name + " " + request.sender.surname
                : request.sender.username}
            </span>
          </div>

          <div className="flex justify-end gap-1">
            <form action={() => accept(request.id, request.sender.id)}>
              <button>
                <Tick />
              </button>
            </form>

            <form action={() => decline(request.id, request.sender.id)}>
              <button>
                <Cross />
              </button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FriendRequestList