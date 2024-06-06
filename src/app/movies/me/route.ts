import { User } from "@/models";
import jwt from "jsonwebtoken";
import { Response } from "@/response";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const token = request.headers.get("Authorization");
  if (!token) {
    return Response.error(401, "Token not provided");
  }

  const { username } = await jwt.verify(
    token.split(" ")[1],
    process.env.JWT_SECRET
  );

  const user = User.findBy("username", username);

  if (!user) {
    return Response.error(401, "User not found");
  }

  return Response.success(
    User.withoutPassword(user),
    "User fetched successfully"
  );
}
