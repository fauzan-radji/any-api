import { NextRequest, NextResponse } from "next/server";

import { Movie } from "@/models";
import { MovieSeeder } from "@/seeder";
import { Response } from "@/response";

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
