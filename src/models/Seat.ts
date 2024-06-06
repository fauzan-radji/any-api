import { Field, Model } from "json-modelizer";

import type Movie from "./Movie";

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
}
