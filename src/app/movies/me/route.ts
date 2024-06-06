import type { NextRequest } from "next/server";
import { Response } from "@/response";
import { User } from "@/models";
import { getUserByToken } from "@/utils";

export async function GET(request: NextRequest) {
  const { user, response } = await getUserByToken(request);
  if (user === null) return response;

  return Response.success(
    User.withoutPassword(user),
    "User fetched successfully"
  );
}
