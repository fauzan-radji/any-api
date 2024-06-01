import { Movie } from "@/models";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const seedKey = url.searchParams.get("key");
  if (seedKey !== process.env.DB_SEED_KEY) {
    return Response.json({ message: "Invalid seed key." }, { status: 401 });
  }

  Movie.clear();

  Movie.create({
    title: "Avatar",
    description:
      "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    price: 10000,
    releaseDate: new Date("2009-12-18"),
    ageRating: 13,
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
  });

  Movie.create({
    title: "I Am Legend",
    description:
      "Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.",
    price: 10000,
    releaseDate: new Date("2007-12-14"),
    ageRating: 13,
    poster:
      "https://m.media-amazon.com/images/M/MV5BYTE1ZTBlYzgtNmMyNS00ZTQ2LWE4NjEtZjUxNDJkNTg2MzlhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
  });

  Movie.create({
    title: "300",
    description:
      "King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C.",
    price: 10000,
    releaseDate: new Date("2007-03-09"),
    ageRating: 17,
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMjAzNTkzNjcxNl5BMl5BanBnXkFtZTYwNDA4NjE3._V1_SX300.jpg",
  });

  Movie.create({
    title: "The Avengers",
    description:
      "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
    price: 10000,
    releaseDate: new Date("2012-05-04"),
    ageRating: 13,
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@@._V1_SX300.jpg",
  });

  Movie.create({
    title: "The Wolf of Wall Street",
    description:
      "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption, and the federal government.",
    price: 10000,
    releaseDate: new Date("2013-12-25"),
    ageRating: 17,
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg",
  });

  Movie.create({
    title: "Interstellar",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    price: 10000,
    releaseDate: new Date("2014-11-07"),
    ageRating: 13,
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
  });

  Movie.create({
    title: "Gotham",
    description:
      "The story behind Detective James Gordon's rise to prominence in Gotham City in the years before Batman's arrival.",
    price: 10000,
    releaseDate: new Date("2014-08-01"),
    ageRating: 14,
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTY2MjMwNDE4OV5BMl5BanBnXkFtZTgwNjI1NjU0OTE@._V1_SX300.jpg",
  });

  Movie.create({
    title: "Power",
    description:
      "James 'Ghost' St. Patrick, a wealthy New York night club owner who has it all, catering for the city's elite and dreaming big, lives a double life as a drug kingpin.",
    price: 10000,
    releaseDate: new Date("2014-08-01"),
    ageRating: 17,
    poster:
      "https://ia.media-imdb.com/images/M/MV5BOTA4NTkzMjUzOF5BMl5BanBnXkFtZTgwNzg5ODkxOTE@._V1_SX300.jpg",
  });

  Movie.create({
    title: "Narcos",
    description:
      "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar.",
    price: 10000,
    releaseDate: new Date("2015-08-28"),
    ageRating: 17,
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTU0ODQ4NDg2OF5BMl5BanBnXkFtZTgwNzczNTE4OTE@._V1_SX300.jpg",
  });

  Movie.create({
    title: "Breaking Bad",
    description:
      "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's financial future.",
    price: 10000,
    releaseDate: new Date("2008-01-20"),
    ageRating: 14,
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTQ0ODYzODc0OV5BMl5BanBnXkFtZTgwMDk3OTcyMDE@._V1_SX300.jpg",
  });

  Movie.create({
    title: "Doctor Strange",
    description:
      "After his career is destroyed, a brilliant but arrogant and conceited surgeon gets a new lease on life when a sorcerer takes him under her wing and trains him to defend the world against evil.",
    price: 15000,
    releaseDate: new Date("2016-11-04"),
    ageRating: 13,
    poster:
      "https://ia.media-imdb.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg",
  });

  Movie.create({
    title: "Rogue One: A Star Wars Story",
    description:
      "The Rebellion makes a risky move to steal the plans to the Death Star, setting up the epic saga to follow.",
    price: 12000,
    releaseDate: new Date("2016-12-16"),
    ageRating: 13,
    poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQyMzI2OTA3OF5BMl5BanBnXkFtZTgwNDg5NjQ0OTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
  });

  Movie.create({
    title: "Assassin's Creed",
    description:
      "When Callum Lynch explores the memories of his ancestor Aguilar and gains the skills of a Master Assassin, he discovers he is a descendant of the secret Assassins society.",
    price: 20000,
    releaseDate: new Date("2016-12-21"),
    ageRating: 17,
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTU2MTQwMjU1OF5BMl5BanBnXkFtZTgwMDA5NjU5ODE@._V1_SX300.jpg",
  });

  Movie.create({
    title: "Luke Cage",
    description:
      "Given superstrength and durability by a sabotaged experiment, a wrongly accused man escapes prison to become a superhero for hire.",
    price: 15000,
    releaseDate: new Date("2016-09-30"),
    ageRating: 17,
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTcyMzc1MjI5MF5BMl5BanBnXkFtZTgwMzE4ODY2OTE@._V1_SX300.jpg",
  });

  return Response.json(
    { message: "Seed data has been created." },
    { status: 201 }
  );
}
