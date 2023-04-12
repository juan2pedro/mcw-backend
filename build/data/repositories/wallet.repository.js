"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletRepository = void 0;
const wallet_db_config_1 = require("../config/wallet.db.config");
const wallet_model_1 = require("../models/wallet.model");
const user_model_1 = require("../models/user.model");
const crypto_model_1 = require("../models/crypto.model");
const logger_1 = __importDefault(require("../../utils/logger"));
class WalletRepository {
    constructor() {
        this._db = {};
        this._db = (0, wallet_db_config_1.connect)();
        this._walletRepository = this._db.sequelize.getRepository(wallet_model_1.WalletPojo);
        this._userRepository = this._db.sequelize.getRepository(user_model_1.UserPojo);
        this._cryptoRepository = this._db.sequelize.getRepository(crypto_model_1.CryptoPojo);
    }
    getAllWallets() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const wallets = yield this._walletRepository.findAll({ include: [this._userRepository, this._cryptoRepository] });
                logger_1.default.info(`wallets: ${JSON.stringify(wallets)}`);
                return wallets;
            }
            catch (error) {
                logger_1.default.error(`error: ${JSON.stringify(error)}`);
                return [];
            }
        });
    }
    addWallet(newWallet) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                newWallet = this._walletRepository.create(newWallet);
                logger_1.default.info(`wallet: ${JSON.stringify(newWallet)}`);
                return newWallet.id_wallet;
            }
            catch (error) {
                logger_1.default.error(`error: ${JSON.stringify(error)}`);
                return error;
            }
        });
    }
    updateWallet(newWallet) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                newWallet = yield this._walletRepository
                    .update({
                    amount: newWallet.amount,
                    user_id: newWallet.user_id,
                    crypto_id: newWallet.crypto
                }, {
                    where: {
                        id_wallet: newWallet.id_wallet
                    },
                });
                logger_1.default.info(`wallet: ${JSON.stringify(newWallet)}`);
                return newWallet.id_wallet;
            }
            catch (error) {
                logger_1.default.error(`error: ${JSON.stringify(error)}`);
                return error.toString();
            }
        });
    }
}
exports.WalletRepository = WalletRepository;
