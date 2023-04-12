"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const wallet_controller_1 = require("../controllers/wallet.controller");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/all', wallet_controller_1.WalletController.getAllWallet);
router.post('/add', wallet_controller_1.WalletController.addWallet);
router.post('/update', wallet_controller_1.WalletController.updateWallet);
exports.default = router;
module.exports = router;
