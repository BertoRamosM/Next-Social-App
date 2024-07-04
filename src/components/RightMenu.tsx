import React from 'react'
import FriendRequests from './FriendRequests'
import Birdthdays from './Birdthdays'
import Ad from './Ad'
import UserInfoCard from './UserInfoCard'
import UserMediaCard from './UserMediaCard'
import { User } from '@prisma/client'

//this User type comes from prisma client
const RightMenu = ({user}:{user?:User}) => {
  return (
    <div className="flex flex-col gap-6 ">
      {user ? (
        <>
          <UserInfoCard user={user} />
          <UserMediaCard user={user} />
        </>
      ) : null}
      <FriendRequests />
      <Birdthdays />
      <Ad size="md" />
    </div>
  );
}

export default RightMenu