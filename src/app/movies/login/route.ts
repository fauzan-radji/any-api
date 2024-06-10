import type { NextRequest } from "next/server";
import { Response } from "@/response";
import { User } from "@/models";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
  const { username, password } = await request.json();

  const users = User.where("username", username);
  if (users.length === 0) {
    return Response.error(401, "Invalid username or password");
  }

  for (const user of users) {
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      return Response.success(
        jwt.sign({ username: user.username }, process.env.JWT_SECRET as string),
        "User login successfully"
      );
    }
  }

  return Response.error(401, "Invalid username or password");
}
