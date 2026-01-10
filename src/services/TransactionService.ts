import * as groupRepositories from "../repositories/groupRepositories"
import * as transactionRepositories from "../repositories/transactionRepositories"
import * as userRepositories from "../repositories/userRepositories"

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

  const user = await userRepositories.getUserById(userId)

  const midtransUrl = process.env.MIDTRANS_TRANSACTION_URL ?? ""
  const midtransAuth = process.env.MIDTRANS_AUTH_STRING ?? ""

  const midtransResponse = await fetch(midtransUrl, {
    body: JSON.stringify({
      "transaction_details": {
        "order_id": transaction.id,
        "gross_amount": transaction.price
      },
      "credit_card": {
        "secure": true
      },
      "customer_details": {
        "email": user.email,
      },
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Basic ${midtransAuth}`,
    },
  })
  
  const midtransJson = await midtransResponse.json()
  
  return midtransJson
}