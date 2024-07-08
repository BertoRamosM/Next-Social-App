'use client'


import Image from "next/image";
import React, { useState } from "react";
import Avatar from "../images/avatar.webp";
import Emoji from "../images/emoji.webp";
import AddImage from "@/app/icons/AddImage";
import AddVideo from "@/app/icons/AddVideo";
import AddEvent from "@/app/icons/AddEvent";
import prisma from "@/lib/client";
import { useUser } from "@clerk/nextjs";
import { CldUploadWidget } from "next-cloudinary";
import AddPostButton from "./AddPostButton";
import { addPost } from "@/lib/actions";


const AddPost = () => {

  const [desc, setDesc] = useState("")
  const [img, setImg] = useState<any>()
  const { user, isLoaded } = useUser();

  if(!isLoaded) return "Loading..."
 

  return (
    <div className="p-4 bg-slate-950 text-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      <Image
        src={user?.imageUrl || "/no-avatar.webp"}
        alt="user avatar"
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      />

      <div className="flex-1">
        <form
          className="flex gap-4 "
          action={(formData) => addPost(formData, img?.secure_url || "")}
        >
          <textarea
            name="desc"
            id="desc"
            placeholder="What's on your mind?"
            className="flex-1 bg-transparent border-2 border-white/30 rounded-lg p-2"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>

          {/*  <Image
              src={Emoji}
              alt="Emoji"
              width={20}
              height={20}
              className="w-5 h-5 cursor-pointer self-end rounded-full"
            /> */}
          <AddPostButton />
        </form>

        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <CldUploadWidget
            uploadPreset="marsecho"
            onSuccess={(result, { widget }) => {
              setImg(result.info);
              widget.close();
            }}
          >
            {({ open }) => {
              return (
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => open()}
                >
                  <AddImage />
                  Photo
                </div>
              );
            }}
          </CldUploadWidget>

          {img && (
            <div className="mt-4">
              <Image
                src={img.secure_url}
                alt="Uploaded image"
                width={50}
                height={50}
                className="rounded-lg"
              />
            </div>
          )}

          {/*   <div className="flex items-center gap-2 cursor-pointer">
            <AddVideo />
            Video
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            <AddEvent />
            Event
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AddPost;
