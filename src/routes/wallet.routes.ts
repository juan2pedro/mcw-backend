import { WalletController } from "../controllers/wallet.controller";
import express from 'express';

const router = express.Router();

router.get('/all', WalletController.getAllWallet);
router.post('/add', WalletController.addWallet);
router.post('/update', WalletController.updateWallet);


export default router;
module.exports = router;