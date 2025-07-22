import { Request, Response } from "express";
import cloudinary from "../../../config/cloudinary";
import multer from "multer";

// Cấu hình multer để xử lý file upload
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed!"));
    }
  },
});

// Upload single image
export const uploadSingleImage = upload.single("image");

// Upload image to cloudinary
export const uploadImageToCloudinary = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    if (!req.file) {
      res.status(400).json({
        success: false,
        message: "No image file provided",
      });
      return;
    }

    // Upload to cloudinary
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: "store-products", // Folder trong cloudinary
            transformation: [
              { width: 800, height: 800, crop: "limit" },
              { quality: "auto" },
            ],
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        )
        .end(req.file?.buffer);
    });

    const uploadResult = result as any;

    res.status(200).json({
      success: true,
      message: "Image uploaded successfully",
      data: {
        url: uploadResult.secure_url,
        public_id: uploadResult.public_id,
      },
    });
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to upload image",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

// Delete image from cloudinary
export const deleteImageFromCloudinary = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { public_id } = req.body;

    if (!public_id) {
      res.status(400).json({
        success: false,
        message: "Public ID is required",
      });
      return;
    }

    const result = await cloudinary.uploader.destroy(public_id);

    res.status(200).json({
      success: true,
      message: "Image deleted successfully",
      data: result,
    });
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete image",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
