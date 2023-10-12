import dbConnect from "../../../../db/connect"; 
import Product from "../../../../db/models/Product"; 
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();
  const products = await Product.find();
  return NextResponse.json({ products });
}

export async function POST(request) {
  const { Name, Bild, Größe, Saison } = await request.json();
  await dbConnect();
  await Product.create({ Name, Bild, Größe, Saison });
  return NextResponse.json({ message: "Product Created" }, { status: 201 });
}
