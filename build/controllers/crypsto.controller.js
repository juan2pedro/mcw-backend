"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoController = void 0;
const crypto_service_1 = require("../services/crypto.service");
const cryptoService = new crypto_service_1.CryptoService();
exports.CryptoController = {
    addWallet: (req, res) => {
        try {
            const newCrypto = req.body;
            cryptoService.addCrypto(newCrypto).then((result) => {
                res.json(result);
            });
        }
        catch (excepcion) {
            console.log(excepcion);
            res.sendStatus(500);
        }
    },
};