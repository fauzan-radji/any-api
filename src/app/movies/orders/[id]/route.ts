import { NextRequest } from "next/server";
import { Order } from "@/models";
import { Response } from "@/response";
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
  const order = Order.find(id);
  if (!order) {
    return Response.error(404, "Order not found");
  }

  if (order.user.id !== user.id) return Response.error(404, "Order not found");

  return Response.success(order, "Order fetched successfully");
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Params }
) {
  const { user, response } = await getUserByToken(request);
  if (user === null) return response;

  const id = +params.id;
  const order = Order.find(id);
  if (!order) {
    return Response.error(404, "Order not found");
  }

  if (order.user.id !== user.id) return Response.error(404, "Order not found");

  const isCancelled = order.tickets.every((ticket) => ticket.isCancelled);

  if (isCancelled) return Response.error(400, "Order is already cancelled");

  order.tickets.forEach((ticket) => {
    ticket.update({ isCancelled: true });
    ticket.seat.update({ isReserved: false });
    ticket.order.user.update({
      balance: ticket.order.user.balance + ticket.seat.movie.price,
    });
  });

  return Response.success(order, "Order cancelled and refunded successfully");
}
