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
exports.WalletService = void 0;
const wallet_repository_1 = require("../data/repositories/wallet.repository");
const crypto_repository_1 = require("../data/repositories/crypto.repository");
const user_repository_1 = require("../data/repositories/user.repository");
class WalletService {
    constructor() {
        this._walletRepository = new wallet_repository_1.WalletRepository();
        this._cryptoRepository = new crypto_repository_1.CryptoRepository();
        this._userRepository = new user_repository_1.UserRepository();
    }
    getAllWallets() {
        return __awaiter(this, void 0, void 0, function* () {
            const walletPromise = yield this._walletRepository.getAllWallets().then(walletAsPojo => {
                let walletsAsDTO = [];
                walletAsPojo.forEach(walletAsPojo => {
                    let walletAsDTO = this.parsePojoIntoDTO(walletAsPojo);
                    walletsAsDTO.push(walletAsDTO);
                });
                return walletsAsDTO;
            }).catch(error => {
                console.log(error);
                throw error;
            });
            return walletPromise;
        });
    }
    addWallet(wallet) {
        return __awaiter(this, void 0, void 0, function* () {
            const walletPojo = this.parseDTOIntoPojo(wallet);
            const walletPromise = yield this._walletRepository
                .addWallet(walletPojo)
                .then((wallet_id) => {
                return wallet_id;
            })
                .catch((error) => {
                console.error(error);
                throw error;
            });
            return walletPromise;
        });
    }
    updateWallet(walletUpdated) {
        return __awaiter(this, void 0, void 0, function* () {
            const walletPojo = this.parseDTOIntoPojo(walletUpdated);
            const walletPromise = yield this._walletRepository.
                updateWallet(walletPojo).then(id_wallet => {
                return id_wallet;
            }).catch(error => {
                console.error(error);
                throw error;
            });
            return walletPromise;
        });
    }
    parsePojoIntoDTO(walletPojo) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        const userDTO = {
            user_id: walletPojo.dataValues.user_id,
            username: (_a = walletPojo.dataValues.user) === null || _a === void 0 ? void 0 : _a.dataValues.username,
            password: (_b = walletPojo.dataValues.user) === null || _b === void 0 ? void 0 : _b.dataValues.password,
            email: (_c = walletPojo.dataValues.user) === null || _c === void 0 ? void 0 : _c.dataValues.email,
            fullname: (_d = walletPojo.dataValues.user) === null || _d === void 0 ? void 0 : _d.dataValues.fullname,
            birthdate: (_e = walletPojo.dataValues.user) === null || _e === void 0 ? void 0 : _e.dataValues.birthdate,
            deposit: (_f = walletPojo.dataValues.user) === null || _f === void 0 ? void 0 : _f.dataValues.deposit,
            status: (_g = walletPojo.dataValues.user) === null || _g === void 0 ? void 0 : _g.dataValues.status
        };
        const cryptoDTO = {
            crypto_id: walletPojo.dataValues.crypto_id,
            name: (_h = walletPojo.dataValues.crypto) === null || _h === void 0 ? void 0 : _h.dataValues.name,
            value: (_j = walletPojo.dataValues.crypto) === null || _j === void 0 ? void 0 : _j.dataValues.value,
            icon: (_k = walletPojo.dataValues.crypto) === null || _k === void 0 ? void 0 : _k.dataValues.icon,
            asset: (_l = walletPojo.dataValues.crypto) === null || _l === void 0 ? void 0 : _l.dataValues.asset,
            stock: (_m = walletPojo.dataValues.crypto) === null || _m === void 0 ? void 0 : _m.dataValues.stock,
        };
        const walletDTO = {
            id_Wallet: walletPojo.dataValues.id_wallet,
            amount: walletPojo.dataValues.amount,
            user_id: walletPojo.dataValues.user_id,
            user: userDTO,
            crypto_id: walletPojo.dataValues.crypto_id,
            crypto: cryptoDTO,
        };
        return walletDTO;
    }
    parseDTOIntoPojo(walletDTO) {
        return walletDTO;
    }
}
exports.WalletService = WalletService;
