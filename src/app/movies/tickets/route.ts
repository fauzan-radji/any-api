import { Response } from "@/response";
import { getUserByToken } from "@/utils";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { user, response } = await getUserByToken(request);
  if (user === null) return response;

  return Response.success(
    user.orders.flatMap((order) => order.tickets),
    "Tickets fetched successfully"
  );
}
