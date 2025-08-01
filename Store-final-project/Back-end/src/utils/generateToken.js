"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config/config"));
const generateToken = (user) => {
    return jsonwebtoken_1.default.sign({ userId: user._id, userame: user.username, role: user.role }, config_1.default.JWT_SECRET, {
        expiresIn: '1h',
    });
};
exports.default = generateToken;
