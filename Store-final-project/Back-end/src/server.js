"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./config/db"));
const cors_1 = __importDefault(require("cors"));
const config_1 = __importDefault(require("./config/config"));
const auth_route_1 = __importDefault(require("./modules/user/routes/auth.route"));
const product_route_1 = __importDefault(require("./modules/products/routes/product.route"));
const upload_route_1 = __importDefault(require("./modules/upload/routes/upload.route"));
// Load environment variables
dotenv_1.default.config();
const app = (0, express_1.default)();
const apiRouter = express_1.default.Router();
(0, db_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: true, // Cho phép tất cả origins trong development
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}));
// Test route để kiểm tra server
app.get("/test", (req, res) => {
    res.json({ message: "Server is working!" });
});
apiRouter.use("/auth", auth_route_1.default); // 👈 Dùng trực tiếp routes ở đây
apiRouter.use("/products", product_route_1.default);
apiRouter.use("/upload", upload_route_1.default); // 👈 Thêm upload routes
app.use("/api/v1", apiRouter); // 👈 Dùng trực tiếp routes ở đây
const PORT = config_1.default.PORT;
app.listen(PORT, () => {
    console.log(`Server đang được chạy trên: ${PORT}`);
});
