import { Model } from "json-modelizer";

export default class Order extends Model {
  static _table = "orders";
  static schema = {};

  id!: number;
  createdAt!: Date;
  updatedAt!: Date;
}
