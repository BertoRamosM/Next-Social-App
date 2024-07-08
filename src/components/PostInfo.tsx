'use client'

import Dots from '@/app/icons/Dots';
import { deletePost } from '@/lib/actions';
import React, { useState } from 'react'

const PostInfo = ({ postId }: { postId: number}) => {
  const [open, setOpen] = useState(false)
  const deletePostWithId = deletePost.bind(null, postId)




  return (
    <div className="relative">
      <div onClick={() => setOpen((prev) => !prev)} className='cursor-pointer'>
        <Dots />
      </div>

      {open && (
        <div className="absolute top-4 right-0 bg-red-500 p-4 rounded-lg flex flex-col gap-2 text-white text-xs shadow-lg z-30">
          <form action={deletePostWithId}>
            <button className="">Delete</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default PostInfo