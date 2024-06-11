import { Movie } from "@/models";
import { MovieSeeder } from "@/seeder";
import type { NextRequest } from "next/server";
import { Response } from "@/response";

export async function GET(request: NextRequest) {
  if(Movie.count() === 0) MovieSeeder.seed();

  const url = new URL(request.url);
  const page = Math.max(+(url.searchParams.get("page") || 1), 1);
  const limit = Math.max(+(url.searchParams.get("limit") || 10), 1);
  const query = url.searchParams.get("query") || "";

  const movies = Movie.paginate(page, limit, (movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );
  const moviesCount = Movie.count();

  return Response.success(movies, "Movies fetched successfully", {
    page,
    limit,
    totalPage: Math.ceil(moviesCount / limit),
    totalData: moviesCount,
  });
}
