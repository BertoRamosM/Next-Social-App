import React from 'react'
import FriendRequests from './FriendRequests'
import Birdthdays from './Birdthdays'
import Ad from './Ad'

const RightMenu = ({userId}:{userId?:string}) => {
  return (
    <div className='flex flex-col gap-6'>
     <FriendRequests />
     <Birdthdays />
     <Ad size='md'/> 
    </div>
  )
}

export default RightMenu