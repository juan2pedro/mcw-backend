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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoService = void 0;
const crypto_repository_1 = require("../data/repositories/crypto.repository");
class CryptoService {
    constructor() {
        this._cryptoRepository = new crypto_repository_1.CryptoRepository();
    }
    addCrypto(crypto) {
        return __awaiter(this, void 0, void 0, function* () {
            const cryptoPojo = this.parseDTOIntoPojo(crypto);
            const cryptoPromise = yield this._cryptoRepository
                .addCrypto(cryptoPojo)
                .then((crypto_id) => {
                console.log(crypto_id);
                return crypto_id;
            })
                .catch((error) => {
                console.error(error);
                throw error;
            });
            return cryptoPromise;
        });
    }
    getAllCryptos() {
        return __awaiter(this, void 0, void 0, function* () {
            const cryptosPromise = yield this._cryptoRepository
                .getAllCryptos()
                .then((cryptosAsPojo) => {
                let cryptosAsDTO = [];
                cryptosAsPojo.forEach((cryptoAsPojo) => {
                    let cryptoAsDTO = this.parseDTOIntoPojo(cryptoAsPojo);
                    cryptosAsDTO.push(cryptoAsDTO);
                });
                return cryptosAsDTO;
            }).catch((error) => {
                console.error(error);
                throw error;
            });
            return cryptosPromise;
        });
    }
    parsePojoIntoDTO(cryptoPojo) {
        const cryptoDTO = {
            crypto_id: cryptoPojo.dataValues.crypto_id,
            name: cryptoPojo.dataValues.name,
            value: cryptoPojo.dataValues.value,
            icon: cryptoPojo.dataValues.icon,
            asset: cryptoPojo.dataValues.asset,
            stock: cryptoPojo.dataValues.stock
        };
        return cryptoDTO;
    }
    parseDTOIntoPojo(cryptoDTO) {
        return cryptoDTO;
    }
}
exports.CryptoService = CryptoService;
