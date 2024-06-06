import { Movie } from "@/models";
import type { NextRequest } from "next/server";
import { Response } from "@/response";

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
