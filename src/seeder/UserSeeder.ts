import { User } from "@/models";
import bcrypt from "bcrypt";

export default class UserSeeder {
  static cleanup(): void {
    User.clear();
  }

  static async seed(): Promise<void> {
    const password = "12345678";
    const crypted = await bcrypt.hash(
      password,
      parseInt(process.env.SALT_ROUNDS as string)
    );
    User.create({
      name: "Fauzan",
      email: "fauzan@email.com",
      username: "fauzan",
      password: crypted,
      birthDate: new Date("2003-10-04"),
      balance: 100_000,
    });
  }
}
