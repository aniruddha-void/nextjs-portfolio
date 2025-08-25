import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    if (!email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    const result = await db.collection("messages").insertOne({
      email,
      subject,
      message,
      createdAt: new Date(),
    });

    return NextResponse.json(
      { success: true, id: result.insertedId },
      { status: 200 }
    );
  } catch (error) {
    console.error("MongoDB Error:", error);
    return NextResponse.json(
      { error: "Failed to save message" },
      { status: 500 }
    );
  }
}
