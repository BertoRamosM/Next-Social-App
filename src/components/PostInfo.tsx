'use client'

import Dots from '@/app/icons/Dots';
import { deletePost } from '@/lib/actions';
import React, { useState } from 'react'

const PostInfo = ({ postId }: { postId: number}) => {
  const [open, setOpen] = useState(false)
  const deletePostWithId = deletePost.bind(null, postId)




  return (
    <div className="relative" onClick={()=>setOpen((prev) => !prev)}>
      <Dots />

      
      {open && 
        <div className="aboslute top-4 right-0 bg-black p-4 rounded-lg flex flex-col gap-2 text-white text-xs shadow-lg z-30">
          <span className='cursor-pointer'>View</span>
          <span className='cursor-pointer'>View</span>
          <form action={deletePostWithId }>
            <button>Delete</button>
          </form>

          
      </div>
       }
    </div>
   
  );
}

export default PostInfo