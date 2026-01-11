import { z } from "zod";

export const createRoomPersonalSchema = z.object({
  user_id: z.string(),
}).strict()

export type CreateRoomPersonalSchema = z.infer<typeof createRoomPersonalSchema>