import * as chatRepositories from "../repositories/chatRepositories"

export const createRoomPersonal = async (sender_id: string, receiver_id: string) => {
  return await chatRepositories.createRoomPersonal(sender_id, receiver_id)
}

export const getRecentRooms = async (userId: string) => {
  return await chatRepositories.getRooms(userId)
}

export const getRoomMessages = async (roomId: string) => {
  return await chatRepositories.getRoomMessages(roomId)
}