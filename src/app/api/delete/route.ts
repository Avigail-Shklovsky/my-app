import { NextResponse } from "next/server";

export function DELETE() {
  return NextResponse.json({ message: "delete from server" });
}
