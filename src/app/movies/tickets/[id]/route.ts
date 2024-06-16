import { NextRequest } from "next/server";
import { Response } from "@/response";
import { Ticket } from "@/models";
import { getUserByToken } from "@/utils";

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

export async function DELETE(
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

  if (ticket.isCancelled) {
    return Response.error(400, "Ticket is already cancelled");
  }

  ticket.update({ isCancelled: true });
  ticket.seat.update({ isReserved: false });
  ticket.order.user.update({
    balance: ticket.order.user.balance + ticket.seat.movie.price,
  });

  return Response.success(ticket, "Ticket cancelled and refunded successfully");
}
