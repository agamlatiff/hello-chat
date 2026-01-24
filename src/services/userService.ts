import type { ResetPasswordValues, SignInValues, SignUpValues } from "../utils/schema/user";
import * as userRepositories from "../repositories/userRepositories"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import mailtrap from "../utils/mailtrap";


export const signUp = async (data: SignUpValues, file: Express.Multer.File) => {
  const isEmailExist = await userRepositories.isEmailExist(data.email)

  if (isEmailExist >= 1) {
    throw new Error("Email already exist")
  }

  const user = await userRepositories.createUser({
    ...data,
    password: await bcrypt.hash(data.password, 12)
  }, file.filename)

  const token = jwt.sign({ id: user.id }, process.env.SECRET_AUTH ?? "", {
    expiresIn: "1 days"
  })

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    photo: user.photo_url,
    token,
  }
}

export const signIn = async (data: SignInValues) => {
  const isEmailExist = await userRepositories.isEmailExist(data.email)

  if (isEmailExist === 0) {
    throw new Error("Email already taken")
  }

  const user = await userRepositories.findUserByEmail(data.email);

  if (!bcrypt.compareSync(data.password, user.password)) {
    throw new Error("Email & password not match")
  }

  const token = jwt.sign({ id: user.id }, process.env.SECRET_AUTH ?? "", {
    expiresIn: "1 days"
  })

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    photo: user.photo_url,
    token,
  }
}

export const getEmailReset = async (email: string) => {
  const data = await userRepositories.createPasswordReset(email);

  await mailtrap.send({
    from: {
      email: "hellochat@test.com",
      name: "Hello Chat"
    },
    to: [{ email: email }],
    subject: "Reset Password",
    text: `Berikut Link Reset Password ${data.token}`
  })

  return true
}

export const updatePassword = async (data: ResetPasswordValues, token: string) => {
  const tokenData = await userRepositories.findResetDataByToken(token)

  if (!tokenData) {
    throw new Error("Invalid token reset")
  }

  await userRepositories.updatePassword(tokenData.user.email, bcrypt.hashSync(data.password, 12))

  await userRepositories.deleteTokenResetById(tokenData.id)

  return true
}
