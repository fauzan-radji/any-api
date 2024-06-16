import { Response } from "@/response";
import { getUserByToken } from "@/utils";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { user, response } = await getUserByToken(request);
  if (user === null) return response;

  const { amount } = await request.json();
  if (typeof amount !== "number") return Response.error(400, "Invalid amount");
  if (amount < 0) return Response.error(400, "Invalid amount");

  user.update({ balance: user.balance + amount });
  return Response.success(
    { balance: user.balance },
    "Balance topped up successfully"
  );
}

export async function DELETE(request: NextRequest) {
  const { user, response } = await getUserByToken(request);
  if (user === null) return response;

  const { amount } = await request.json();
  if (typeof amount !== "number") return Response.error(400, "Invalid amount");
  if (amount < 0) return Response.error(400, "Invalid amount");

  if (user.balance < amount) return Response.error(400, "Insufficient balance");

  user.update({ balance: user.balance - amount });
  return Response.success(
    { balance: user.balance },
    "Balance withdrawn successfully"
  );
}
