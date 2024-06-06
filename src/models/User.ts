import { Field, Model } from "json-modelizer";

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

  static withoutPassword(user: User) {
    const { password, ...rest } = user;
    return rest;
  }
}
