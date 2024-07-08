import React from "react";
import prisma from "@/lib/client";
import CommentList from "./CommentList";

const Comments = async({postId} : {postId: number}) => {

  const comments = await prisma.comment.findMany({
    where: {
      postId,
    },
    include: {
      user: true
    }
  })
  return (
    <div className="bg-slate-800 p-2 rounded-lg">
      <CommentList comments={comments} postId={postId} />
    </div>
  );
};

export default Comments;
