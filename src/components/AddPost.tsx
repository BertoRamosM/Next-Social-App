import Image from "next/image";
import React from "react";
import Avatar from "../images/avatar.webp";
import Emoji from "../images/emoji.webp";
import AddImage from "@/app/icons/AddImage";
import AddVideo from "@/app/icons/AddVideo";
import AddEvent from "@/app/icons/AddEvent";

const AddPost = () => {
  return (
    <div className="p-4 bg-white rounded-lg flex gap-4 justify-between text-sm">
      <Image
        src={Avatar}
        alt="user avatar"
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      />

      <div className="flex-1">
        <div className=" flex gap-4">
          <textarea
            name=""
            id=""
            placeholder="What's on your mind?"
            className="flex-1 bg-slate-100 rounded-lg p-2"
          ></textarea>
          <Image
            src={Emoji}
            alt="Emoji"
            width={20}
            height={20}
            className="w-5 h-5 cursor-pointer self-end rounded-full"
          />
        </div>

        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div className="flex items-center gap-2 cursor-pointer">
            <AddImage />
            Photo
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            <AddVideo />
            Video
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            <AddEvent />
            Event
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
