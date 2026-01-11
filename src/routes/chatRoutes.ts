import express from "express"
import verifyToken from "../middlewares/verifyToken"
import * as chatController from "../controllers/chatController"

const chatRoutes = express.Router()

chatRoutes.get(
  "/chat/rooms",
  verifyToken,
  chatController.getRecentRooms
)

chatRoutes.post(
  "/chat/rooms",
  verifyToken,
  chatController.createRoomPersonal
)

export default chatRoutes
