import { NextResponse } from "next/server";
import dbConnect from "../../../../db/connect";
import User from "../../../../db/models/User";
import bcrypt from "bcryptjs";

export async function POST(request) {
    try {
      const { username, password } = await request.json();
      const hashedPassword = await bcrypt.hash(password, 10);
      await dbConnect();
      await User.create({ username, password: hashedPassword });
  
      return NextResponse.json({ message: "User registered." }, { status: 201 });
    } catch (error) {
      return NextResponse.json(
        { message: "An error occurred while registering the user." },
        { status: 500 }
      );
    }
  }