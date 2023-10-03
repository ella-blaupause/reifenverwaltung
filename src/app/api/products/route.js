import connectMongoDB from "../../../../db/connect"; 
import Product from "../../../../db/models/Product"; 
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  const products = await Product.find();
  return NextResponse.json({ products });
}