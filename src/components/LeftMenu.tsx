import React from 'react'
import ProfileCard from "../components/ProfileCard"
import Link from 'next/link.js';
import PostsIcon from '@/app/icons/PostsIcon';
import ActivityIcon from '@/app/icons/ActivityIcon';
import MarketIcon from '@/app/icons/MarketIcon';
import EventsIcon from '@/app/icons/EventsIcon';
import AlbumsIcon from '@/app/icons/AlbumsIcon';
import VideoIcon from '@/app/icons/VideoIcon';
import NewsIcon from '@/app/icons/NewsIcon';
import CourseIcon from '@/app/icons/CourseIcon';
import SettingsIcon from '@/app/icons/SettingsIcon';
import Ad from './Ad';

const LeftMenu = ({type}:{type:'home'|'profile'}) => {
  return (
    <div className="flex flex-col gap-6">
      {type === "profile" && <ProfileCard />}
      <div className=" p-2 bg-slate-950 rounded-lg shadow-md text-sm text-white flex flex-col gap-2">
        <Link
          href="/"
          className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-700"
        >
          <PostsIcon />
          <span>My posts</span>
        </Link>
        <hr className="border-t-1 border-green-300 w-36 self-center" />

        <Link
          href="/"
          className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-700"
        >
          <ActivityIcon />
          <span>Activity</span>
        </Link>
        <hr className="border-t-1 border-green-300 w-36 self-center" />

        <Link
          href="/"
          className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-700"
        >
          <MarketIcon />
          <span>Marketplace</span>
        </Link>
        <hr className="border-t-1 border-green-300 w-36 self-center" />

        <Link
          href="/"
          className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-700"
        >
          <EventsIcon />
          <span>Events</span>
        </Link>
        <hr className="border-t-1 border-green-300 w-36 self-center" />

        <Link
          href="/"
          className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-700"
        >
          <AlbumsIcon />
          <span>Albums</span>
        </Link>
        <hr className="border-t-1 border-green-300 w-36 self-center" />

        <Link
          href="/"
          className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-700"
        >
          <VideoIcon />
          <span>Videos</span>
        </Link>
        <hr className="border-t-1 border-green-300 w-36 self-center" />

        <Link
          href="/"
          className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-700"
        >
          <NewsIcon />
          <span>News</span>
        </Link>
        <hr className="border-t-1 border-green-300 w-36 self-center" />

        <Link
          href="/"
          className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-700"
        >
          <CourseIcon />
          <span>Courses</span>
        </Link>
        <hr className="border-t-1 border-green-300 w-36 self-center" />

        <Link
          href="/"
          className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-700"
        >
          <SettingsIcon />
          <span>Settings</span>
        </Link>
      </div>
      <Ad size="sm" />
    </div>
  );
}

export default LeftMenu