"use client";

import { updateProfile } from "@/lib/actions";
import Image from "next/image";
import { useState } from "react";
import Toast from "@/components/Toast";

const UpdateUser = ({ user }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const result = await updateProfile(formData);

    if (result.success) {
      setToastMessage("Profile updated successfully");
    } else {
      setToastMessage(
        "Failed to update profile: " + JSON.stringify(result.errors)
      );
    }

    setIsOpen(false);
    setTimeout(() => setToastMessage(""), 3000); // Hide toast after 3 seconds
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
            className="p-12 bg-slate-800 rounded-lg shadow-md flex flex-col gap-2 w-full md:w-1/2 xl:w-1/3 relative"
            onSubmit={handleUpdate}
          >
            <h1 className="text-3xl">Update Profile</h1>

            <div className="mt-4 text-xs text-green-300">
              Use the header profile avatar to change the avatar or username
            </div>

            <div className="flex flex-col gap-2 my-4">
              <label className="text-white text-xs">Cover Picture</label>

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
            </div>

            <div className="flex flex-wrap justify-between gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs text-white">
                  First name
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder={user.name || "David"}
                  className="bg-transparent border-b border-green-200 focus:outline-none p-2 text-xs"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="surname" className="text-xs text-white">
                  Surname
                </label>
                <input
                  name="surname"
                  type="text"
                  placeholder={user.surname || "Bowie"}
                  className="bg-transparent border-b border-green-200 focus:outline-none flex-1 p-2 text-xs"
                />
              </div>

              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="description" className="text-xs text-white">
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

              <div className="flex flex-col gap-2">
                <label htmlFor="city" className="text-xs text-white">
                  City
                </label>
                <input
                  name="city"
                  type="text"
                  placeholder={user.city || "New Red Rock"}
                  className="bg-transparent border-b border-green-200 focus:outline-none p-2 text-xs"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="school" className="text-xs text-white">
                  School
                </label>
                <input
                  name="school"
                  type="text"
                  placeholder={user.school || "Galactic University of Dust"}
                  className="bg-transparent border-b border-green-200 focus:outline-none p-2 text-xs"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="work" className="text-xs text-white">
                  Work
                </label>
                <input
                  name="work"
                  type="text"
                  placeholder={user.work || "Mars Chocolate Inc."}
                  className="bg-transparent border-b border-green-200 focus:outline-none p-2 text-xs"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="website" className="text-xs text-white">
                  Website
                </label>
                <input
                  name="website"
                  type="text"
                  placeholder={user.website || "https://albertoramos.dev/"}
                  className="bg-transparent border-b border-green-200 focus:outline-none p-2 text-xs"
                />
              </div>

              <button
                type="submit"
                className="bg-red-500 p-2 mt-2 rounded-md text-white w-full hover:opacity-80"
              >
                Update
              </button>
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

      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage("")} />
      )}
    </div>
  );
};

export default UpdateUser;
