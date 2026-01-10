import type { Prisma } from "@prisma/client";
import prisma from "../utils/prisma";

export const createTransaction = async (data: Prisma.TransactionCreateInput) => {
  return await prisma.transaction.create({
    data
  })
}