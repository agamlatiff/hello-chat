import type { GroupFreeValues } from "../utils/schema/group";
import * as groupRepositories from "../repositories/groupRepositories"

export const createGroup = async(data: GroupFreeValues, photo: string, userId: string) => {
  const group = await groupRepositories.createFreeGroup(data, photo, userId);
  
  return group;
}