import type { NextFunction, Response } from "express";
import type { CustomRequest } from "../types/CustomRequest";
import { createRoomPersonalSchema } from "../utils/schema/chat";
import * as chatService from "../services/chatService"

export const createRoomPersonal = async (
  req: CustomRequest, 
  res: Response,
  next: NextFunction
) => {
  try {
    const parse = createRoomPersonalSchema.safeParse(req.body)

    if (!parse.success) {
      
      const errorMessage = parse.error.issues.map((err) => `${err.path} - ${err.message}`)
      
      return res.status(400).json({
        status: false,
        message: "Validation Error",
        detail: errorMessage
      })
    }

    const data = await chatService.createRoomPersonal(req?.user?.id ?? "", parse.data.user_id)

    return res.json({
      success: true,
      message: "Success create room",
      data
    })
  }catch (error) {
    next(error)
  }
}

export const getRecentRooms = async (
  req: CustomRequest, 
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await chatService.getRecentRooms(req?.user?.id ?? "")

    return res.json({
      success: true,
      message: "Success get rooms",
      data
    })
  }catch (error) {
    next(error)
  }
}

export const getRoomMessages = async (
  req: CustomRequest, 
  res: Response,
  next: NextFunction
) => {
  try {
    const {roomId} = req.params
    
    const data = await chatService.getRoomMessages(roomId)

    return res.json({
      success: true,
      message: "Success get rooms messages",
      data
    })
  }catch (error) {
    next(error)
  }
}