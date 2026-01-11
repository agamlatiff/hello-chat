import prisma from "../utils/prisma";
import * as userRepositories from "../repositories/userRepositories"

export const createRoomPersonal = async (sender_id: string, receiver_id: string) => {
  const room = await prisma.room.findFirst({
    where: {
      members: {
        every: {
          AND: [
            {
              user_id: sender_id
            },
            {
              user_id: receiver_id
            }
          ]
        }
      }
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