import { User } from "@/models";
import { Response } from "@/response";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request: NextRequest) {
  const data = await request.json();
  const { name, username, email, password } = data;
  const birthDate = new Date(data.birthDate);

  if (!name || !username || !email || !password || !birthDate) {
    return NextResponse.json(Response.error("All fields are required"), {
      status: 400,
    });
  }

  if (User.where("username", username).length > 0) {
    return NextResponse.json(Response.error("Username already taken"), {
      status: 400,
    });
  }

  if (User.where("email", email).length > 0) {
    return NextResponse.json(Response.error("Email already taken"), {
      status: 400,
    });
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
    birthDate,
  });

  return NextResponse.json(
    Response.success(User.withoutPassword(user), "User created successfully")
  );
}
