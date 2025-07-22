import mongoose, { Document, Schema } from "mongoose";
import { ICart } from "../../cart/models/cart.model";

export interface IUser extends Document {
  //Thông tin cá nhân (Personal Info):
  username: string;
  email: string;
  phoneNumber: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  role: string;
  balance: number;
  address: string;
  // // Thông tin mua sắm (Shopping Info):
  cart: ICart[]; // Mảng các giỏ hàng của người dùng
  // order: {
  //     orderId: string;
  //     productId: string;
  //     quantity: number;
  //     totalPrice: number;
  //     status: string; // "pending", "shipped", "delivered", "cancelled"
  // }
}
const userSchema = new Schema<IUser>(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    role: { type: String, enum: ["user","staff" ,"admin"], default: "user" },
    balance: { type: Number, default: 0 },
    address: { type: String, default: "" },
    cart: [{ type: Schema.Types.ObjectId, ref: "Cart" }],

    // order:[
    //     {
    //         orderId:{type:String},
    //         productId:{type:String},
    //         quantity:{type:Number},
    //         totalPrice:{type:Number},
    //         status:{type:String}
    //     }
    // ]
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model<IUser>("User", userSchema);
export default User;
