import { Router } from "express";
import {
  uploadSingleImage,
  uploadImageToCloudinary,
  deleteImageFromCloudinary,
} from "../controllers/upload.controller";

const router = Router();

// Route upload ảnh lên cloudinary
router.post("/image", uploadSingleImage, uploadImageToCloudinary);

// Route xóa ảnh từ cloudinary
router.delete("/image", deleteImageFromCloudinary);

export default router;
