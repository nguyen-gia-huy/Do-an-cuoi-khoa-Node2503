import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    if (!response.data.success) {
      throw new Error("Failed to fetch products");
    }
    return response.data.products;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch products");
  }
};
export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/products/${id}`);
    if (!response.data.success) {
      throw new Error("Failed to fetch product");
    }
    return response.data.product;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch product");
  }
};
export const createProduct = async (productData) => {
  try {
    const response = await axios.post(`${BASE_URL}/products`, productData);
    if (!response.data.success) {
      throw new Error("Failed to create product");
    }
    return response.data.product;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create product");
  }
};
export const updateProduct = async (id, productData) => {
  try {
    const response = await axios.patch(
      `${BASE_URL}/products/${id}`,
      productData
    );
    if (!response.data.success) {
      throw new Error("Failed to update product");
    }
    return response.data.product;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to update product");
  }
};
export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/products/${id}`);
    if (!response.data.success) {
      throw new Error("Failed to delete product");
    }
    return response.data.message;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to delete product");
  }
};
