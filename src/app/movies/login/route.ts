import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User } from "@/models";
import { Response } from "@/response";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { username, password } = await request.json();

  const users = User.where("username", username);
  if (users.length === 0) {
    return NextResponse.json(Response.error("Invalid username or password"), {
      status: 401,
    });
  }

  for (const user of users) {
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      return NextResponse.json(
        Response.success(
          User.withoutPassword(user),
          "User login successfully",
          {
            token: jwt.sign({ id: user.id }, process.env.JWT_SECRET),
          }
        )
      );
    }
  }

  return NextResponse.json(Response.error("Invalid username or password"), {
    status: 401,
  });
}
