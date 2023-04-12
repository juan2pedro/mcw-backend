"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_controller_1 = require("../controllers/crypto.controller");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post('/add', crypto_controller_1.CryptoController.addCrypto);
router.get('/all', crypto_controller_1.CryptoController.getAllCrypto);
exports.default = router;
module.exports = router;
