import { PrismaClient, User } from "@prisma/client";
import { Request, NextFunction } from "express";
import verify from "jsonwebtoken";

export interface ExpressReq extends Request {
  user?: User;
}

const prisma = new PrismaClient();

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  if (!req.headers.authorization) {
    throw new Error("Blocked");
  }

  const token = req.headers.authorization.split(" ")[1];
  if (!token) throw new Error("No tolken");

  try {
    const doecode = verify(token, "JWT_SECRET") as { email: string };
    const user = await prisma.user.findUnique({
      where: {
        email: doecode.email,
      },
    });
    req.user = user ?? undefined;
    next();
  } catch (err) {
    req.user = undefined;
    next();
  }
};
