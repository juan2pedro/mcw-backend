"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletController = void 0;
const wallet_service_1 = require("../services/wallet.service");
const walletService = new wallet_service_1.WalletService();
exports.WalletController = {
    getAllWallet: (_req, res) => {
        walletService
            .getAllWallets()
            .then((result) => {
            res.json(result);
        })
            .catch((exception) => {
            res.json(exception);
            res.send(500);
        });
    },
    addWallet: (req, res) => {
        try {
            const newWallet = req.body;
            walletService.addWallet(newWallet).then((result) => {
                res.json(result);
            });
        }
        catch (exception) {
            console.log(exception);
            res.sendStatus(500);
        }
    },
    updateWallet: (req, res) => {
        try {
            const walletUpdated = req.body;
            walletService.updateWallet(walletUpdated).then((result) => {
                res.json(result);
            });
        }
        catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }
};
