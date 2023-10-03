// db/models/Product.js
import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
  Name: { type: String, required: true },
  Bild: { type: String, required: true },
  Größe: { type: String, required: true },
  Saison: { type: String, required: true },
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;