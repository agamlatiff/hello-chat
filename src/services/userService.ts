import type { signUpValues } from "../utils/schema/user";
import * as userRepositories from "../repositories/userRepositories"

export const signUp = async (data: signUpValues, file: Express.Multer.File) => {
  const isEmailExist = await userRepositories.isEmailExist(data.email)

  if (isEmailExist >= 1) {
    throw new Error("Email already exist")
  }
  
  
}