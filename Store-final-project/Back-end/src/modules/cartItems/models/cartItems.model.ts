import mongoose, { Document, Schema } from "mongoose";

export interface ICartItems extends Document {
  item_id: string;
  cart_id: mongoose.Types.ObjectId; // Tham chiếu tới Cart
  product_id: mongoose.Types.ObjectId; // Tham chiếu tới Product
  quantity: number;
}

const cartItemsSchema = new Schema<ICartItems>(
  {
    item_id: { type: String, required: true, unique: true },
    cart_id: { type: Schema.Types.ObjectId, ref: "Cart", required: true },
    product_id: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    quantity: { type: Number, required: true, default: 1 },
  },
  {
    timestamps: true,
  }
);

const CartItems = mongoose.model<ICartItems>("CartItems", cartItemsSchema);
export default CartItems;
