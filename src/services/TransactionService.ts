import * as groupRepositories from "../repositories/groupRepositories"
import * as transactionRepositories from "../repositories/transactionRepositories"

export const createTransaction = async (groupId: string, userId: string) => {
  const checkMember = await groupRepositories.getMemberById(userId, groupId)

  if (checkMember) {
    throw new Error("You already in joined group")
  }

  const group = await groupRepositories.findGroupById(groupId)

  if (group.type === "FREE") {
    throw new Error("This group is free")
  }

  const transaction = await transactionRepositories.createTransaction({
    price: group.price,
    owner: {
      connect: {
        id: group.room.members[0].user_id,
      }
    },
    user: {
      connect: {
        id: userId
      }
    },
    type: "PENDING",
    group: {
      connect: {
        id: groupId
      }
    }
  })
}