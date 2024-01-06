import { NextRequest, NextResponse } from "next/server";

export const allRooms = async () => {
  return NextResponse.json({
    data: "hello world",
  });
};
