import { MovieSeeder, UserSeeder } from "@/seeder";

export async function POST(request: Request) {
  const seedKey = (await request.json()).key;
  if (seedKey !== process.env.DB_SEED_KEY) {
    return Response.json({ message: "Invalid seed key." }, { status: 401 });
  }

  MovieSeeder.cleanup();
  MovieSeeder.seed();
  if (process.env.ENVIRONMENT === "development") {
    UserSeeder.cleanup();
    UserSeeder.seed();
  }

  return Response.json(
    { message: "Seed data has been created." },
    { status: 201 }
  );
}
