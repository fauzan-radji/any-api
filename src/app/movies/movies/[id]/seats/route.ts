import { Movie, Order, Seat, Ticket } from "@/models";

import { MovieSeeder } from "@/seeder";
import type { NextRequest } from "next/server";
import { Response } from "@/response";
import { getUserByToken, unique } from "@/utils";

interface Params {
  id: string;
}

export async function GET(_: NextRequest, { params }: { params: Params }) {
  if (Movie.count() === 0) MovieSeeder.seed();

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
  if (Movie.count() === 0) MovieSeeder.seed();

  const { user, response } = await getUserByToken(request);
  if (user === null) return response;

  const id = +params.id;
  const movie = Movie.find(id);
  if (!movie) {
    return Response.error(404, "Movie not found");
  }

  const body = (await request.json()) as { seats: number[] };
  const seats = unique(body.seats);
  const totalPrice = seats.length * movie.price;
  if (totalPrice > user.balance) {
    return Response.error(400, "Balance not enough");
  }

  if (!Array.isArray(seats) || seats.length === 0) {
    return Response.error(400, "Invalid seats");
  }

  user.update({ balance: user.balance - totalPrice });
  const order = Order.create({
    total: totalPrice,
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
