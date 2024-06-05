import { Field, Model } from "json-modelizer";

export default class User extends Model {
  static _table = "users";
  static schema = {
    name: Field.String,
    username: Field.String,
    email: Field.String,
    password: Field.String,
    birthDate: Field.Date,
  };

  id!: number;
  name!: string;
  username!: string;
  email!: string;
  password!: string;
  birthDate!: Date;

  static withoutPassword(user: User) {
    return {
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      birthDate: user.birthDate,
    };
  }
}
