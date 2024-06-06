import { Field, Model } from "json-modelizer";

export default class Ticket extends Model {
  static _table = "tickets";
  static schema = {
    isCancelled: Field.Boolean,
  };

  id!: number;
  isCancelled!: boolean;
  createdAt!: Date;
  updatedAt!: Date;
}
