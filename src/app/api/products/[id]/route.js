import { NextResponse } from "next/server";
import dbConnect from "../../../../../db/connect";
import Product from "../../../../../db/models/Product";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newName: Name, newBild: Bild, newGröße: Größe, newSaison: Saison  } = await request.json();
  await dbConnect();
  await Product.findByIdAndUpdate(id, { Name, Bild, Größe, Saison });
  return NextResponse.json({ message: "Product updated" }, { status: 200 });
}

export async function GET({ params }) {
  const { id } = params;
  await dbConnect();
  const product = await Product.findOne({ _id: id });
  return NextResponse.json({ product }, { status: 200 });
}
