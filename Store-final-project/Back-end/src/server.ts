import express from "express";

import cors from "cors";
import config from "./config/config";
import router from "./modules/user/routes/auth.route";
import productsRoutes from "./modules/products/routes/product.route";
import uploadRoutes from "./modules/upload/routes/upload.route";
import connectDB from "./config/db";
const app = express();
const apiRouter = express.Router();
connectDB();

app.use(express.json());
app.use(cors());

apiRouter.use("/auth", router); // 👈 Dùng trực tiếp routes ở đây
apiRouter.use("/products", productsRoutes);
apiRouter.use("/upload", uploadRoutes);

app.use("/api/v1", apiRouter); // 👈 Dùng trực tiếp routes ở đây

const PORT = config.PORT;
app.listen(PORT, () => {
  console.log(`Server đang được chạy trên: ${PORT}`);
});
