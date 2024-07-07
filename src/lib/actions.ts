'use server'

import { auth } from "@clerk/nextjs/server"
import prisma from "./client"
import { z } from "zod"

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


export const switchBlock = async (userId:string) => {
  const { userId: currentUserId } = auth()
  if (!currentUserId) {
    throw new Error('User not authenticated')
  }

  try {
    const existingBlock = await prisma.block.findFirst({
      where: {
        blockerId: currentUserId,
        blockedId: userId
      }
    })

    if (existingBlock) {
      await prisma.block.delete({
        where: {
          id: existingBlock.id,
        }
      })
    } else {
      await prisma.block.create({
        data: {
          blockerId: currentUserId,
          blockedId: userId,
        },
      });
    }
  } catch (error) {
 console.log(error);
 throw new Error("Something went wrong");  }
}


export const acceptFollowRequest = async (userId: string) => {
  const { userId: currentUserId } = auth();

  if (!currentUserId) {
    throw new Error("User not authenticaed")
  }

  try {

    const existingFollowRequest = await prisma.followRequest.findFirst({
      where: {
        senderId: userId,
        receiverId: currentUserId
      }
    })

    if (existingFollowRequest) {
      await prisma.followRequest.delete({
        where: {
          id: existingFollowRequest.id,
        },
      })

      await prisma.follower.create({
        data: {
          followerId: userId,
          followingId: currentUserId,
        }
      })
    }
  } catch (error) {
    console.log(error)
    throw new Error('Something went wrong')
  }
}

export const declineFollowRequest = async (userId: string) => {
  const { userId: currentUserId } = auth();

  if (!currentUserId) {
    throw new Error("User not authenticaed");
  }

  try {
    const existingFollowRequest = await prisma.followRequest.findFirst({
      where: {
        senderId: userId,
        receiverId: currentUserId,
      },
    });

    if (existingFollowRequest) {
      await prisma.followRequest.delete({
        where: {
          id: existingFollowRequest.id,
        },
      });
    }
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};

export const updateProfile = async (formData: FormData) => {
  const fields = Object.fromEntries(formData);

  const filteredFields = Object.fromEntries(
    Object.entries(fields).filter(([_, value]) => value !== "")
  );

  const Profile = z.object({
    cover: z.string().optional(),
    name: z.string().max(60).optional(),
    surname: z.string().max(60).optional(),
    description: z.string().max(255).optional(),
    city: z.string().max(60).optional(),
    school: z.string().max(60).optional(),
    work: z.string().max(60).optional(),
    website: z.string().max(60).optional(),
  });

  const validatedFields = Profile.safeParse(filteredFields);

  if (!validatedFields.success) {
    return {
      status: "error",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { userId } = auth();

  if (!userId) {
    return { status: "error", message: "Authentication error" };
  }

  try {
    await prisma.user.update({
      where: {
        id: userId,
      },
      data: validatedFields.data,
    });

    return { status: "success" };
  } catch (error) {
    console.log(error);
    return { status: "error", message: "Something went wrong" };
  }
};