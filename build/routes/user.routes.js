"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("../controllers/user.controller");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post('/add', user_controller_1.userController.addUser);
router.post('/login', user_controller_1.userController.getLogin);
exports.default = router;
module.exports = router;
