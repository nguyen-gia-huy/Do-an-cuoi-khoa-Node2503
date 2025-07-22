import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

// Upload ảnh lên Cloudinary
export const uploadImage = async (imageFile) => {
  try {
    const formData = new FormData();
    formData.append("image", imageFile);

    const response = await axios.post(`${BASE_URL}/upload/image`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (!response.data.success) {
      throw new Error(response.data.message || "Failed to upload image");
    }

    return {
      success: true,
      data: response.data.data,
    };
  } catch (error) {
    console.error("Upload error:", error);
    throw new Error(
      error.response?.data?.message || error.message || "Failed to upload image"
    );
  }
};

// Xóa ảnh từ Cloudinary
export const deleteImage = async (publicId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/upload/image`, {
      data: { public_id: publicId },
    });

    if (!response.data.success) {
      throw new Error(response.data.message || "Failed to delete image");
    }

    return response.data;
  } catch (error) {
    console.error("Delete error:", error);
    throw new Error(
      error.response?.data?.message || error.message || "Failed to delete image"
    );
  }
};
