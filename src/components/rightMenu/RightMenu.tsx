import React, { Suspense } from "react";
import FriendRequests from "./FriendRequests";
import Birdthdays from "./Birdthdays";
import Ad from "../Ad";
import UserInfoCard from "./UserInfoCard";
import UserMediaCard from "./UserMediaCard";
import { User } from "@prisma/client";

//this User type comes from prisma client
const RightMenu = ({ user }: { user?: User }) => {
  return (
    <div className="flex flex-col gap-6 ">
      {user ? (
        <>
          <Suspense fallback="loading...">
            <UserInfoCard user={user} />
          </Suspense>
          <Suspense fallback="loading...">
            <UserMediaCard user={user} />
          </Suspense>
        </>
      ) : null}
      <FriendRequests />
      <Birdthdays />
      <Ad size="md" />
    </div>
  );
};

export default RightMenu;
