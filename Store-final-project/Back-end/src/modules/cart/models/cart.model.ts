import mongoose, { Document, Schema } from "mongoose";

export interface ICart extends Document {
  cart_id: string;
  userId: mongoose.Types.ObjectId; // Tham chiếu tới user
}

const cartSchema = new Schema<ICart>(
  {
    cart_id: { type: String, required: true, unique: true },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    // ...các trường khác nếu có...
  },
  {
    timestamps: true,
  }
);

const Cart = mongoose.model<ICart>("Cart", cartSchema);
export default Cart;
