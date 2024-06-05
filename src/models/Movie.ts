import { Field, Model } from "json-modelizer";

export default class Movie extends Model {
  static _table = "movies";
  static schema = {
    title: Field.String,
    description: Field.Text,
    price: Field.Number,
    releaseDate: Field.Date,
    ageRating: Field.Number,
    poster: Field.String,
  };

  // FIXME: This is a workaround for a bug in the json-modelizer package.
  // At the time of writing this code (01-06-2024), the json-modelizer package
  // does not automatically infer the types of the fields from the schema.
  id!: number;
  title!: string;
  description!: string;
  price!: number;
  releaseDate!: Date;
  ageRating!: number;
  poster!: string;
}
