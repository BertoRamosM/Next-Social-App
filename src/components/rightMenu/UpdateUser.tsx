"use client";

import { updateProfile } from "@/lib/actions";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useActionState, useState } from "react";
import UpdateButton from "./UpdateButton";



const UpdateUser = ({ user }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cover, setCover] = useState<any>(false);

    const [state, formAction] = useActionState(updateProfile, {success: false, error:false})
  
  const router = useRouter()




  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    state.success && router.refresh()
  };



  return (
    <div>
      <span
        className="text-green-300 text-xs cursor-pointer"
        onClick={handleOpen}
      >
        Update
      </span>

      {isOpen && (
        <div className="fixed h-screen w-screen top-0 left-0 bg-black bg-opacity-65 flex items-center justify-center z-40 py-12">
          <form
            action={(formData) =>
              formAction({ formData, cover: cover?.secure_url || "" })
            }
            className="p-12 bg-slate-800 rounded-lg shadow-md flex flex-col gap-1 w-full md:w-1/2 xl:w-1/3 relative"
          >
            <h1 className="text-xl">Update Profile</h1>

            <div className="mt-4 text-xs text-green-300">
              Use the header profile avatar to change the avatar or username
            </div>

            <CldUploadWidget
              uploadPreset="marsecho"
              onSuccess={(result) => setCover(result.info)}
            >
              {({ open }) => {
                return (
                  <div
                    className="flex flex-col gap-1 my-4"
                    onClick={() => open()}
                  >
                    <label className="text-white text-xs">Cover Pictrue</label>

                    <div className="flex items-center gap-1 cursor-pointer">
                      <Image
                        src={user.cover || "/no-cover.webp"}
                        alt="user cover picture"
                        width={48}
                        height={32}
                        className="w-12 h-8 rounded-md object-cover"
                      />
                      <span className="text-xs underline text-red-500">
                        Change
                      </span>
                    </div>
                  </div>
                );
              }}
            </CldUploadWidget>

            <div className="flex flex-wrap justify-between gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="text-xs text-white">
                  First name
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder={user.name || "David"}
                  className="bg-transparent border-b border-green-200 focus:outline-none p-2 text-xs"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="text-xs text-white">
                  Surname
                </label>
                <input
                  name="surname"
                  type="text"
                  placeholder={user.surname || "Bowie"}
                  className="bg-transparent border-b border-green-200 focus:outline-none flex-1 p-2 text-xs"
                />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <label htmlFor="" className="text-xs text-white">
                  Description
                </label>
                <input
                  name="description"
                  className="bg-transparent border-b border-green-200 focus:outline-none flex-1 p-2 text-xs"
                  type="text"
                  placeholder={
                    user.description ||
                    "Planet Earth is blue and there's nothing I can do"
                  }
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="text-xs text-white">
                  City
                </label>
                <input
                  name="city"
                  type="text"
                  placeholder={user.city || "New Red Rock"}
                  className="bg-transparent border-b border-green-200 focus:outline-none p-2 text-xs"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="text-xs text-white">
                  School
                </label>
                <input
                  name="school"
                  type="text"
                  placeholder={user.school || "Galactic University of Dust"}
                  className="bg-transparent border-b border-green-200 focus:outline-none p-2 text-xs"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="text-xs text-white">
                  Work
                </label>
                <input
                  name="work"
                  type="text"
                  placeholder={user.work || "Mars Chocolate Inc."}
                  className="bg-transparent border-b border-green-200 focus:outline-none p-2 text-xs"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="text-xs text-white">
                  Website
                </label>
                <input
                  name="website"
                  type="text"
                  placeholder={user.website || "https://albertoramos.dev/"}
                  className="bg-transparent border-b border-green-200 focus:outline-none p-2 text-xs"
                />
              </div>
              <UpdateButton />
              {state.success && (
                <span className="text-green-300">Profile Updated</span>
              )}
              {state.error && (
                <span className="text-orange-400">Something went wrong</span>
              )}
            </div>

            <div
              className="absolute cursor-pointer text-4xl right-5 top-5 text-white"
              onClick={handleClose}
            >
              x
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdateUser;
