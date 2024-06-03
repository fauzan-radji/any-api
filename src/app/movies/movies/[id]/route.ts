import { Movie } from "@/models";
import { NextRequest, NextResponse } from "next/server";

interface Params {
  id: string;
}

export async function GET(_: NextRequest, { params }: { params: Params }) {
  const id = +params.id;
  const movie = Movie.find(id);
  if (!movie) {
    return NextResponse.json(
      {
        message: "Movie not found",
      },
      { status: 404 }
    );
  }

  return NextResponse.json({
    message: "Movie fetched successfully",
    data: movie,
  });
}
