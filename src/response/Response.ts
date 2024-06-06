import { NextResponse } from "next/server";

export default class Response {
  static success(
    data: any,
    message?: string,
    additionalData?: { [key: string]: any }
  ) {
    return NextResponse.json({
      message: message || "Success",
      data,
      ...additionalData,
    });
  }

  static error(status: number, message: string) {
    return NextResponse.json(
      { message },
      {
        status,
        statusText: message,
      }
    );
  }
}
