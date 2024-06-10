import { NextRequest } from "next/server";
import { Response } from "@/response";
import { getUserByToken } from "@/utils";

export async function GET(request: NextRequest) {
  const {user, response} = await getUserByToken(request);
  if(user === null) return response;

  return Response.success(
    user.orders,
    "Orders fetched successfully"
  );
}