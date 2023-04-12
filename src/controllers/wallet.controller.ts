import { WalletService } from "../services/wallet.service";
const walletService: WalletService = new WalletService();

export const WalletController = {

    getAllWallet: (_req: any, res: any) => {
        walletService
        .getAllWallets()
            .then((result) => {
                res.json(result);
            })
            .catch((exception) => {
                res.json(exception);
                res.send(500)
            })
    },

    addWallet: (req: any, res: any) => {
        try {
            const newWallet = req.body;
            walletService.addWallet(newWallet).then((result) => {
                res.json(result);
            })
        } catch (exception) {
            console.log(exception);
            res.sendStatus(500)
        }
    },
    updateWallet: (req: any, res: any) => {
        try {
            const walletUpdated = req.body;
            walletService.updateWallet(walletUpdated).then((result) => {
                res.json(result);
            })
        } catch (error) {
            console.log(error);
            res.sendStatus(500)
        }
    }

}