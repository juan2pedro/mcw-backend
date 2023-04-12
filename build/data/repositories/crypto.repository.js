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
exports.CryptoRepository = void 0;
const crypto_model_1 = require("../models/crypto.model");
const crypto_db_config_1 = require("../config/crypto.db.config");
const logger_1 = __importDefault(require("../../utils/logger"));
class CryptoRepository {
    constructor() {
        this._db = {};
        this._db = (0, crypto_db_config_1.connect)();
        this._cryptoRepository = this._db.sequelize.getRepository(crypto_model_1.CryptoPojo);
    }
    addCrypto(newCrypto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                newCrypto = yield this._cryptoRepository.create(newCrypto);
                logger_1.default.info(`Crypto Added: ${JSON.stringify(newCrypto)}`);
                return newCrypto.crypto_id;
            }
            catch (error) {
                logger_1.default.error(`error: ${JSON.stringify(error)}`);
                return error;
            }
        });
    }
    getAllCryptos() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cryptos = yield this._cryptoRepository.findAll();
                logger_1.default.info(`cryptos: solicitadas`);
                return cryptos;
            }
            catch (error) {
                logger_1.default.error(`error: ${JSON.stringify(error)}`);
                return [];
            }
        });
    }
}
exports.CryptoRepository = CryptoRepository;
