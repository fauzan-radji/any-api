import type { NextRequest } from "next/server";

import { Response } from "@/response";
import { User } from "@/models";
import bcrypt from "bcrypt";

export async function POST(request: NextRequest) {
  const data = await request.json();
  const { name, username, email, password } = data;
  const birthDate = new Date(data.birthDate);

  if (!name || !username || !email || !password || !birthDate) {
    return Response.error(400, "All fields are required");
  }

  if (User.where("username", username).length > 0) {
    return Response.error(400, "Username already taken");
  }

  if (User.where("email", email).length > 0) {
    return Response.error(400, "Email already taken");
  }

  const crypted = await bcrypt.hash(
    password,
    parseInt(process.env.SALT_ROUNDS as string)
  );

  const user = User.create({
    name,
    username,
    email,
    password: crypted,
    balance: 100_000,
    birthDate,
  });

  return Response.success(
    User.withoutPassword(user),
    "User created successfully"
  );
}
