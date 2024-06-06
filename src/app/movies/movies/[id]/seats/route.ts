import { Movie, Order, Seat, Ticket } from "@/models";

import type { NextRequest } from "next/server";
import { Response } from "@/response";
import { getUserByToken } from "@/utils";

interface Params {
  id: string;
}

export async function GET(_: NextRequest, { params }: { params: Params }) {
  const id = +params.id;
  const movie = Movie.find(id);
  if (!movie) {
    return Response.error(404, "Movie not found");
  }

  return Response.success(movie, "Movie fetched successfully");
}

export async function POST(
  request: NextRequest,
  { params }: { params: Params }
) {
  const { user, response } = await getUserByToken(request);
  if (user === null) return response;

  const id = +params.id;
  const movie = Movie.find(id);
  if (!movie) {
    return Response.error(404, "Movie not found");
  }

  const { seats } = await request.json();

  if (!Array.isArray(seats) || seats.length === 0) {
    return Response.error(400, "Invalid seats");
  }

  const order = Order.create({
    userId: user.id,
  });
  const allSeats = Seat.where("movieId", movie.id);

  for (const seatNumber of seats) {
    let seat = allSeats.find((s) => s.number === seatNumber);
    if (seat) {
      if (seat.isReserved) {
        return Response.error(
          400,
          `Seat ${seatNumber} of movie ${movie.title} is already reserved`
        );
      }

      seat.update({
        isReserved: true,
      });
    } else {
      seat = Seat.create({
        number: seatNumber,
        isReserved: true,
        movieId: movie.id,
      });
    }

    Ticket.create({
      isCancelled: false,
      seatId: seat.id,
      orderId: order.id,
    });
  }

  return Response.success(order, "Success");
}
