# Cloudinary Configuration Setup Guide

## Bước 1: Tạo tài khoản Cloudinary

1. Truy cập https://cloudinary.com/
2. Đăng ký tài khoản miễn phí
3. Đăng nhập vào Dashboard

## Bước 2: Lấy thông tin API Keys

1. Trong Dashboard, tìm phần "Product Environment Credentials"
2. Copy các thông tin sau:
   - Cloud name
   - API Key
   - API Secret

## Bước 3: Cấu hình trong file .env

Thêm các dòng sau vào file .env của bạn:

```
CLOUDINARY_CLOUD_NAME=your_cloud_name_here
CLOUDINARY_API_KEY=your_api_key_here
CLOUDINARY_API_SECRET=your_api_secret_here
```

## Lưu ý:

- Thay thế `your_cloud_name_here`, `your_api_key_here`, `your_api_secret_here` bằng thông tin thực tế từ Cloudinary
- Không chia sẻ thông tin API Secret với bất kỳ ai
- Đảm bảo file .env được thêm vào .gitignore

## Kiểm tra upload

- Upload endpoint: POST /api/v1/upload/image
- Delete endpoint: DELETE /api/v1/upload/image
- Ảnh sẽ được lưu trong folder 'store-products' trên Cloudinary
