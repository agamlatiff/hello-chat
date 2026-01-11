import prisma from "../utils/prisma";
import * as userRepositories from "../repositories/userRepositories"

export const createRoomPersonal = async (sender_id: string, receiver_id: string) => {
  const room = await prisma.room.findFirst({
    where: {
      members: {
        every: {
          user_id: {
            in: [sender_id, receiver_id]
          }
        }
      },
      is_group: false
    }
  })

  const owner = await userRepositories.findRole("OWNER")
  const member = await userRepositories.findRole("MEMBER")

  return await prisma.room.upsert({
    where: {
      id: room?.id ?? "0"
    },
    create: {
      created_by: sender_id,
      is_group: false,
      name: "",
      members: {
        createMany: {
          data: [
            {
              user_id: sender_id,
              role_id: owner.id
            },
            {
              user_id: receiver_id,
              role_id: member.id
            }
          ]
        }
      }
    },
    update: {

    }
  })
}

export const getRooms = async (userId: string) => {
  return await prisma.room.findMany({
    where: {
      members: {
        some: {
          user_id: userId
        }
      }
    },
    include: {
      messages: {
        select: {
          content: true,
          user: {
            select: {
              name: true,
              photo_url: true,
            }
          }
        },
        take: 1,
        orderBy: {
          created_at: "desc"
        }
      },
      members: {
        select: {
          user: {
            select: {
              name: true,
              photo_url: true,
            }
          },
        },
        where: {
          role: {
            role: "MEMBER"
          }
        }
      },
      group:{
        select: {
          name: true,
          photo_url: true
        }
      }
    },
    orderBy: {
      created_at: "desc"
    }
  })
}