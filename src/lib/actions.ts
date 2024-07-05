'use server'

import { auth } from "@clerk/nextjs/server"
import prisma from "./client"

export const switchFollow = async (userId: string) => {

  //here we get the user from the auth clerk, the id from above its a parameter passed when called the function
  const { userId: currentUserId } = auth()
  
  if (!currentUserId) {
    throw new Error('User not authenticated')
  }
  try {
    const existingFollow = await prisma.follower.findFirst({
      where: {
        followerId: currentUserId,
        followingId: userId,
      }
    })
    
    if (existingFollow) {
      await prisma.follower.delete({
        where: {
          id: existingFollow.id,
        }
      })

    } else {
      const existingFollowRequest = await prisma.followRequest.findFirst({
        where: {
          senderId: currentUserId,
          receiverId: userId,
        }
      })
      if (existingFollowRequest) {
        await prisma.followRequest.delete({
          where: {
            id: existingFollowRequest.id,
          }
        })
      } else {
        await prisma.followRequest.create({
          data: {
            senderId: currentUserId,
            receiverId: userId,
          },
        });
      }
    }
  } catch (error) {
    console.log(error)
    throw new Error("Something went wrong")
  }
}