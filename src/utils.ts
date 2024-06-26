import type { NextRequest, NextResponse } from "next/server";

import { JwtPayload } from "./types";
import { Response } from "./response";
import { User } from "./models";
import jwt from "jsonwebtoken";

export async function getUserByToken(request: NextRequest): Promise<
  | {
      user: null;
      response: NextResponse<{
        message: string;
      }>;
    }
  | {
      user: User;
      response: null;
    }
> {
  const token = request.headers.get("Authorization");
  if (!token) {
    return { user: null, response: Response.error(401, "Token not provided") };
  }

  const { username } = jwt.verify(
    token.split(" ")[1],
    process.env.JWT_SECRET as string
  ) as JwtPayload;

  const user = User.findBy("username", username);

  if (!user) {
    return { user: null, response: Response.error(401, "User not found") };
  }

  return { user, response: null };
}

export function unique<T extends number | string>(arr: T[]): T[] {
  const set: Record<T, boolean> = {} as Record<T, boolean>;
  return arr.filter((item) => {
    if (set.hasOwnProperty(item)) return false;
    set[item] = true;
    return true;
  });
}
