import dbConnect from "../../../../db/connect"; 
import Product from "../../../../db/models/Product"; 
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();
  const products = await Product.find();
  return NextResponse.json({ products });
}