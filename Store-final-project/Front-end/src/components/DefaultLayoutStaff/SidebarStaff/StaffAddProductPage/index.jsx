import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { createProduct } from "../../../../apis/productsAPI/productApi";
import { uploadImage } from "../../../../apis/uploadAPI/uploadApi";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Image,
  Spinner,
  Alert,
} from "react-bootstrap";
const AddProductPage = () => {
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [uploadError, setUploadError] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  // Handle file selection - chỉ tạo preview, không upload
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageFile(file);
      formik.setFieldValue("productImage", file);

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);

      setUploadError("");
    }
  };

  const validationSchema = Yup.object({
    productName: Yup.string().required("Product name is required"),
    productDescription: Yup.string().required(
      "Product description is required"
    ),
    productPrice: Yup.number()
      .required("Product price is required")
      .positive("Price must be positive"),
    productImage: Yup.mixed()
      .required("Product image is required")
      .test("fileType", "Only image files are allowed", (value) => {
        if (!value) return false;
        return (
          value &&
          ["image/jpeg", "image/jpg", "image/png", "image/gif"].includes(
            value.type
          )
        );
      })
      .test("fileSize", "File size must be less than 5MB", (value) => {
        if (!value) return false;
        return value && value.size <= 5 * 1024 * 1024; // 5MB
      }),
    productCategory: Yup.string()
      .oneOf(["shirt", "pant", "shoes", "accessories"], "Invalid category")
      .required("Product category is required"),
    productForGender: Yup.string()
      .oneOf(["male", "female", "unisex"], "Invalid gender")
      .required("Product gender is required"),
    productSize: Yup.string()
      .oneOf(["small", "medium", "large"], "Invalid size")
      .required("Product size is required"),
    product_stock_quantity: Yup.number()
      .required("Product stock quantity is required")
      .min(0, "Stock quantity must be at least 0"),
  });
  const formik = useFormik({
    initialValues: {
      productName: "",
      productDescription: "",
      productPrice: 0,
      productImage: null,
      productCategory: "",
      productForGender: "",
      productSize: "",
      product_stock_quantity: 0,
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        setUploadError("");
        setIsUploading(true);

        // Kiểm tra xem có file ảnh được chọn không
        if (!imageFile) {
          setUploadError("Vui lòng chọn hình ảnh sản phẩm");
          setIsUploading(false);
          return;
        }

        // Upload ảnh lên Cloudinary trước
        const uploadResult = await uploadImage(imageFile);

        const newProduct = {
          name: values.productName,
          description: values.productDescription,
          price: values.productPrice,
          image: uploadResult.data.url, // Sử dụng URL từ Cloudinary
          image_public_id: uploadResult.data.public_id, // Lưu public_id để có thể xóa ảnh sau này
          category: values.productCategory,
          forGender: values.productForGender,
          size: values.productSize,
          stock_quantity: values.product_stock_quantity,
        };

        await createProduct(newProduct);
        alert("Product created successfully");
        resetForm();
        setImagePreview("");
        setImageFile(null);
      } catch (error) {
        console.error("Error creating product:", error);
        setUploadError(
          error.message || "Failed to create product. Please try again."
        );
      } finally {
        setSubmitting(false);
        setIsUploading(false);
      }
    },
  });
  return (
    <Container fluid className="py-4">
      <Row className="justify-content-center">
        <Col lg={10} xl={8}>
          <Card className="shadow-lg border-0">
            <Card.Header className="bg-primary text-white text-center py-3">
              <h3 className="mb-0">Thêm Sản Phẩm Mới</h3>
            </Card.Header>

            <Card.Body className="p-4">
              <Form onSubmit={formik.handleSubmit}>
                {/* Row 1: Thông tin cơ bản */}
                <Row className="mb-4">
                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-bold">
                        Tên sản phẩm <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="productName"
                        value={formik.values.productName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Nhập tên sản phẩm"
                        isInvalid={
                          formik.touched.productName &&
                          formik.errors.productName
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.productName}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-bold">
                        Giá (VNĐ) <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="number"
                        name="productPrice"
                        value={formik.values.productPrice}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Ví dụ: 150000"
                        min="0"
                        isInvalid={
                          formik.touched.productPrice &&
                          formik.errors.productPrice
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.productPrice}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-bold">
                        Số lượng tồn kho <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="number"
                        name="product_stock_quantity"
                        value={formik.values.product_stock_quantity}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Số lượng"
                        min="0"
                        isInvalid={
                          formik.touched.product_stock_quantity &&
                          formik.errors.product_stock_quantity
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.product_stock_quantity}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                {/* Mô tả sản phẩm */}
                <Row className="mb-4">
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-bold">
                        Mô tả sản phẩm <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        name="productDescription"
                        value={formik.values.productDescription}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Mô tả chi tiết sản phẩm..."
                        isInvalid={
                          formik.touched.productDescription &&
                          formik.errors.productDescription
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.productDescription}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                {/* Row 2: Danh mục, Giới tính, Kích thước */}
                <Row className="mb-4">
                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-bold">
                        Danh mục <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Select
                        name="productCategory"
                        value={formik.values.productCategory}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={
                          formik.touched.productCategory &&
                          formik.errors.productCategory
                        }
                      >
                        <option value="">-- Chọn danh mục --</option>
                        <option value="shirt">Áo</option>
                        <option value="pant">Quần</option>
                        <option value="shoes">Giày</option>
                        <option value="accessories">Phụ kiện</option>
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.productCategory}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-bold">
                        Dành cho <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Select
                        name="productForGender"
                        value={formik.values.productForGender}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={
                          formik.touched.productForGender &&
                          formik.errors.productForGender
                        }
                      >
                        <option value="">-- Chọn giới tính --</option>
                        <option value="male">Nam</option>
                        <option value="female">Nữ</option>
                        <option value="unisex">Unisex</option>
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.productForGender}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-bold">
                        Kích thước <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Select
                        name="productSize"
                        value={formik.values.productSize}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={
                          formik.touched.productSize &&
                          formik.errors.productSize
                        }
                      >
                        <option value="">-- Chọn kích thước --</option>
                        <option value="small">S (Small)</option>
                        <option value="medium">M (Medium)</option>
                        <option value="large">L (Large)</option>
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.productSize}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                {/* Link hình ảnh với preview */}
                <Row className="mb-4">
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-bold">
                        Hình ảnh sản phẩm <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="file"
                        name="productImage"
                        onChange={handleFileChange}
                        onBlur={formik.handleBlur}
                        accept="image/*"
                        isInvalid={
                          formik.touched.productImage &&
                          formik.errors.productImage
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.productImage}
                      </Form.Control.Feedback>
                      <Form.Text className="text-muted">
                        Chọn file ảnh (JPG, PNG, GIF) - Tối đa 5MB
                      </Form.Text>
                      {isUploading && (
                        <div className="mt-2">
                          <Spinner size="sm" className="me-2" />
                          <span className="text-info">Đang upload ảnh...</span>
                        </div>
                      )}
                      {imageFile && !isUploading && (
                        <Alert variant="info" className="mt-2 py-2">
                          ✓ Đã chọn ảnh: {imageFile.name}
                        </Alert>
                      )}
                      {uploadError && (
                        <Alert variant="danger" className="mt-2 py-2">
                          {uploadError}
                        </Alert>
                      )}
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Label className="fw-bold">
                      Xem trước hình ảnh
                    </Form.Label>
                    <Card
                      className="border-2 border-dashed"
                      style={{ minHeight: "200px" }}
                    >
                      <Card.Body className="d-flex align-items-center justify-content-center">
                        {imagePreview ? (
                          <Image
                            src={imagePreview}
                            alt="Preview"
                            fluid
                            rounded
                            style={{ maxHeight: "180px", objectFit: "cover" }}
                          />
                        ) : (
                          <div className="text-center text-muted">
                            <div className="mb-2" style={{ fontSize: "3rem" }}>
                              📷
                            </div>
                            <p className="mb-0">Chọn file ảnh để xem trước</p>
                          </div>
                        )}
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>

                {/* Nút Submit */}
                <Row>
                  <Col className="text-center">
                    <Button
                      variant="primary"
                      type="submit"
                      size="lg"
                      disabled={
                        formik.isSubmitting || isUploading || !imageFile
                      }
                      className="px-5 py-2"
                    >
                      {formik.isSubmitting || isUploading ? (
                        <>
                          <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                            className="me-2"
                          />
                          {isUploading
                            ? "Đang upload ảnh..."
                            : "Đang thêm sản phẩm..."}
                        </>
                      ) : (
                        <>➕ Thêm Sản Phẩm</>
                      )}
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddProductPage;
