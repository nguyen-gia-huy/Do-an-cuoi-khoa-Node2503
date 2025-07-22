import { Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../models/user.model";
import generateToken from "../../../utils/generateToken";

export const registerUser = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { username, email, phoneNumber, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "Email already exists" });
    }
    user = new User({ username, email, phoneNumber, password });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const token = generateToken(user);

    res.status(201).json({
      message: "Đăng ký thành công",
      token,
    });
  } catch (err) {
    console.error(err);
		res.status(500).send('Server error');
  }
};
export const loginUser = async ( req: Request,
  res: Response): Promise<any> => {
    const { email, password } = req.body;
    try{
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Email doesnt exist" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid password" });
        }
        const token = generateToken(user);
        res.status(200).json({
            message: "Login successful",
            token,
        });
    }catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
  }
  export const handleChangePassword = async (req: Request, res: Response): Promise<any> => {
    const {email, oldPassword, newPassword} = req.body;
    try {
        const user = await User.findOne({ email });
        if(!user){
            return res.status(400).json({ message: "Email doesn't exist" });
        }
        const isMatch = await bcrypt.compare(oldPassword, user.password);
        if(!isMatch){
            return res.status(400).json({ message: "Invalid password" });
        }
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(newPassword, salt);
        await user.save();
        res.status(200).json({
            message: "Password changed successfully",
        });
  }catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
}