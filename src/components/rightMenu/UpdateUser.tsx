'use client'

import { User } from "@prisma/client"
import { useState } from "react"



const UpdateUser = ({ user }: { user: User }) => {
  
  const [isOpen, setIsOpen] = useState(false)

   const handleOpen = () => {
     setIsOpen(true);
   };

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <div>
      <span className="text-green-300 text-xs cursor-pointer" onClick={handleOpen}>Update</span>
      
      {isOpen && <div className="absolute h-screen w-screen top-0 left-0 bg-black bg-opacity-65 flex items-center justify-center z-50 ">
        <form action="" className="p-12 bg-slate-800 rounded-lg shadow-md flex flex-col gap-2 w-full md:w-1/2 xl:w-1/3  relative">
          
          <h1>Update Profile </h1>
          
          <div className="absolute cursor-pointer text-lg right-2 top-2" onClick={handleClose}>x</div>
        </form>
      </div>
      }
    </div>
  )
}

export default UpdateUser