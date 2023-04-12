"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const crypto_routes_1 = __importDefault(require("./routes/crypto.routes"));
const wallet_routes_1 = __importDefault(require("./routes/wallet.routes"));
const logger_1 = __importDefault(require("./utils/logger"));
const app = (0, express_1.default)();
const cors = require('cors');
const port = process.env.PORT;
const whitelist = ['http://localhost:4200'];
app.use(express_1.default.json());
app.use(cors({ origin: whitelist }));
app.get('/ping', (_req, res) => {
    res.send('Pong!');
});
app.use('/api/user', user_routes_1.default);
app.use('/api/crypto', crypto_routes_1.default);
app.use('/api/wallet', wallet_routes_1.default);
app.listen(port, () => {
    logger_1.default.info(`⚡️⚡️⚡️⚡️⚡️ Server is running at http://localhost:${port}⚡️⚡️⚡️⚡️⚡️`);
});
