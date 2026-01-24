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
    method: "POST",
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

export const updateTransaction = async (order_id: string, status: string) => {
  switch (status) {
    case "capture":
    case "settlement": {
      const transaction = await transactionRepositories.updateTransaction(order_id, "SUCCESS")

      const group = await groupRepositories.findGroupById(transaction.group_id)

      await groupRepositories.addMemberToGroup(group.room_id, transaction.user_id)

      return {
        transaction_id: transaction.id
      }
    }
    case "deny":
    case "expire":
    case "failure": {
      const transaction = await transactionRepositories.updateTransaction(order_id, "FAILED")

      return {
        transaction_id: transaction.id
      }
    }
    default: {}
  }
}

export const getRevenueStat = async (user_id: string) => {
  const transactions = await transactionRepositories.getMyTransaction(user_id)
  const payouts = await transactionRepositories.getMyPayouts(user_id)
  const groups = await groupRepositories.getMyOwnGroups(user_id)
  
  const totalRevenue = transactions.reduce((acc, curr) => {
    if(curr.type === "SUCCESS") {
       return acc + curr.price
    }
    
    return acc
  }, 0)
  
  const totalPayout = payouts.reduce((acc, curr) => acc + curr.amount, 0)
  
  const balance = totalRevenue - totalPayout;
  
  const totalVipGroups = groups.filter((group) => group.type === "PAID").length;
  const totalVipMembers = groups.reduce((acc, curr) => {
    if(curr.type === "PAID") {
      return acc + (curr?.room?._count?.members ?? 0)
    }
    
    return acc
  }, 0)

  
  const latestMemberVip = transactions.filter((transaction) => transaction.type === "FAILED" )
  
  return {
    balance,
    total_vip_groups: totalVipGroups,
    total_vip_members: totalVipMembers,
    latest_member: latestMemberVip,
    total_revenue: totalRevenue
  }

}