import { Field, Model } from "json-modelizer";

import type Movie from "./Movie";
import type Ticket from "./Ticket";

export default class Seat extends Model {
  static _table = "seats";
  static schema = {
    number: Field.Number,
    isReserved: Field.Boolean,
  };

  id!: number;
  number!: number;
  isReserved!: boolean;
  createdAt!: Date;
  updatedAt!: Date;

  movieId!: number;
  movie!: Movie;

  tickets!: Ticket[];

  // belongsTo
  withoutMovie() {
    const { movie, ...seatWithoutMovie } = this.withoutTickets();
    return seatWithoutMovie;
  }

  // hasMany
  withoutTickets() {
    const { tickets, ...seatWithoutTickets } = this;
    return seatWithoutTickets;
  }

  toJSON() {
    return {
      ...this,
      movie: this.movie.withoutSeats(),
      tickets: this.tickets.map((ticket) => ticket.withoutSeatAndOrder()),
    };
  }
}
