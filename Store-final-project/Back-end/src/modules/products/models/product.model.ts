import mongoose, { Document, Schema } from "mongoose";

export interface IProduct extends Document {
  name: string; // Name of the product
  description: string;
  price: number;
  image: string; // URL từ Cloudinary
  image_public_id?: string; // Public ID từ Cloudinary (optional để xóa ảnh)
  category: string; // "shirt" | "pant" | "shoes" | "accessories"
  forGender: string; // "male" | "female" | "unisex"
  size: string; // "small" | "medium" | "large"
  stock_quantity: number;
}
const productSchema = new mongoose.Schema<IProduct>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    image_public_id: { type: String }, // Public ID từ Cloudinary để xóa ảnh
    category: {
      type: String,
      required: true,
      enum: ["shirt", "pant", "shoes", "accessories"],
    },
    forGender: {
      type: String,
      required: true,
      enum: ["male", "female", "unisex"],
    },
    size: {
      type: String,
      required: true,
      enum: ["small", "medium", "large"],
    },
    stock_quantity: { type: Number, required: true, default: 0 },
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model<IProduct>("Product", productSchema);
export default Product;
