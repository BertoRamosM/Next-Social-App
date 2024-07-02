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
      <div className=" p-2 bg-white rounded-lg shadow-md text-sm text-gray-600 flex flex-col gap-2">
        <Link
          href="/"
          className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-100"
        >
          <PostsIcon />
          <span>My posts</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />

        <Link
          href="/"
          className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-100"
        >
          <ActivityIcon />
          <span>Activity</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />

        <Link
          href="/"
          className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-100"
        >
          <MarketIcon />
          <span>Marketplace</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />

        <Link
          href="/"
          className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-100"
        >
          <EventsIcon />
          <span>Events</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />

        <Link
          href="/"
          className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-100"
        >
          <AlbumsIcon />
          <span>Albums</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />

        <Link
          href="/"
          className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-100"
        >
          <VideoIcon />
          <span>Videos</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />

        <Link
          href="/"
          className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-100"
        >
          <NewsIcon />
          <span>News</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />

        <Link
          href="/"
          className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-100"
        >
          <CourseIcon />
          <span>Courses</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />

        <Link
          href="/"
          className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-100"
        >
          <SettingsIcon />
          <span>Settings</span>
        </Link>
      </div>
      <Ad size='sm'/>
    </div>
  );
}

export default LeftMenu