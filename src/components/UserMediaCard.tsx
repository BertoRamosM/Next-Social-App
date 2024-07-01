import Link from 'next/link'
import React from 'react'

const UserMediaCard = ({ userId }: { userId:string }) => {
    return (
     <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className=" flex items-center justify-between foont-md">
        <span className="text-gray-500">User Media</span>
        <Link href="" className="text-red-500 text-xs">
          See all
        </Link>
      </div>
      </div>
  )
}

export default UserMediaCard