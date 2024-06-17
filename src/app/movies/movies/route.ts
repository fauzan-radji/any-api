import { Movie } from "@/models";
import { MovieSeeder } from "@/seeder";
import type { NextRequest } from "next/server";
import { Response } from "@/response";

export async function GET(request: NextRequest) {
  if (Movie.count() === 0) MovieSeeder.seed();

  const url = new URL(request.url);
  const limitParam = +(url.searchParams.get("limit") || 10);
  const pageParam = +(url.searchParams.get("page") || 1);
  const queryParam = url.searchParams.get("query") || "";

  const limit = Math.max(limitParam, 1);
  const totalData = Movie.count();
  const totalPage = Math.ceil(totalData / limit);
  const page = Math.max(Math.min(pageParam, totalPage), 1);

  const movies = Movie.paginate(page, limit, (movie) =>
    movie.title.toLowerCase().includes(queryParam.toLowerCase())
  );

  return Response.success(movies, "Movies fetched successfully", {
    page,
    limit,
    totalPage,
    totalData,
  });
}
