import type { RoleType } from "@prisma/client"
import type { Request } from "express"

type User = {
  id: string, 
  email: string,
  name: string,
  role: RoleType
}

export interface CustomRequest extends Request {
  user? : User | null
}