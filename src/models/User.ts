import { Field, Model } from "json-modelizer";

import type Order from "./Order";

export default class User extends Model {
  static _table = "users";
  static schema = {
    name: Field.String,
    username: Field.String,
    email: Field.String,
    password: Field.String,
    birthDate: Field.Date,
    balance: Field.Number,
  };

  id!: number;
  name!: string;
  username!: string;
  email!: string;
  password!: string;
  birthDate!: Date;
  balance!: number;
  createdAt!: Date;
  updatedAt!: Date;

  orders!: Order[];

  toJSON() {
    return {
      ...this,
      orders: this.orders.map((order) => order.withoutUser()),
    };
  }

  static withoutPassword(user: User) {
    const { password, ...rest } = user;
    return rest;
  }
}
