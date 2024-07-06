'use client'

import { User } from "@prisma/client"
import Image from "next/image"
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
      <span
        className="text-green-300 text-xs cursor-pointer"
        onClick={handleOpen}
      >
        Update
      </span>

      {isOpen && (
        <div className="absolute h-screen w-screen top-0 left-0 bg-black bg-opacity-65 flex items-center justify-center z-50 ">
          <form
            action=""
            className="p-12 bg-slate-800 rounded-lg shadow-md flex flex-col gap-2 w-full md:w-1/2 xl:w-1/3  relative"
          >
            <h1>Update Profile</h1>

            <div className="mt-4 text-xs text-green-300">
              Use the header profile avatar to change the avatar or username
            </div>

            <div className="flex flex-col gap-4 my-4">
              <label>Cover Pictrue</label>
            </div>

            <div className="flex items-center gap-2 cursor-pointer">
              <Image
                src={user.cover || "/no-cover.webp"}
                alt="user cover picture"
                width={48}
                height={32}
                className="w-12 h-8 rounded-md object-cover"
              />
              <span className="text-xs underline text-red-500">Change</span>
            </div>

            <div className="flex flex-wrap justify-between gap-2 xl:gap-4">
              <div className="flex flex-col gap-4">
                <label htmlFor="" className="text-xs text-green-300">
                  First name
                </label>
                <input
                  type="text"
                  placeholder={user.name || "David"}
                  className="bg-transparent border-b border-green-200 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex flex-wrap justify-between gap-4 xl:gap-6">
              <div className="flex flex-col gap-4">
                <label htmlFor="" className="text-xs text-green-300">
                  Surname
                </label>
                <input
                  type="text"
                  placeholder={user.surname || "Bowie"}
                  className="bg-transparent border-b border-green-200 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex flex-wrap justify-between gap-2 xl:gap-4">
              <div className="flex flex-col gap-4">
                <label htmlFor="" className="text-xs text-green-300">
                  Description
                </label>
                <input
                  className="bg-transparent border-b border-green-200 focus:outline-none"
                  type="text"
                  placeholder={
                    user.description ||
                    "Planet Earth is blue and there's nothing I can do"
                  }
                />
              </div>
              <div className="flex flex-wrap justify-between gap-4 xl:gap-6">
                <div className="flex flex-col gap-4">
                  <label htmlFor="" className="text-xs text-green-300">
                    City
                  </label>
                  <input
                    type="text"
                    placeholder={user.city || "New Red Rock"}
                    className="bg-transparent border-b border-green-200 focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-wrap justify-between gap-4 xl:gap-6">
                <div className="flex flex-col gap-4">
                  <label htmlFor="" className="text-xs text-green-300">
                    School
                  </label>
                  <input
                    type="text"
                    placeholder={user.school || "Galactic University of Dust"}
                    className="bg-transparent border-b border-green-200 focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-wrap justify-between gap-4 xl:gap-6">
                <div className="flex flex-col gap-4">
                  <label htmlFor="" className="text-xs text-green-300">
                    Work
                  </label>
                  <input
                    type="text"
                    placeholder={user.work || "Mars Chocolate Inc."}
                    className="bg-transparent border-b border-green-200 focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-wrap justify-between gap-4 xl:gap-6">
                <div className="flex flex-col gap-4">
                  <label htmlFor="" className="text-xs text-green-300">
                    Website
                  </label>
                  <input
                    type="text"
                    placeholder={user.website || "https://albertoramos.dev/"}
                    className="bg-transparent border-b border-green-200 focus:outline-none"
                  />
                </div>
              </div>
              <button className="bg-red-500 p-2 mt-2 rounded-md text-white w-full hover:opacity-80">Update</button>
            </div>

            <div
              className="absolute cursor-pointer text-lg right-2 top-2"
              onClick={handleClose}
            >
              x
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default UpdateUser