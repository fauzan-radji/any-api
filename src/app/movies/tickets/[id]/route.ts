import { Ticket } from "@/models";
import { Response } from "@/response";
import { getUserByToken } from "@/utils";
import { NextRequest } from "next/server";

interface Params {
  id: string;
}

export async function GET(
  request: NextRequest,
  { params }: { params: Params }
) {
  const { user, response } = await getUserByToken(request);
  if (user === null) return response;

  const id = +params.id;
  const ticket = Ticket.find(id);
  if (!ticket) {
    return Response.error(404, "Ticket not found");
  }

  if (ticket.order.user.id !== user.id) {
    return Response.error(404, "Ticket not found");
  }

  return Response.success(ticket, "Ticket fetched successfully");
}
