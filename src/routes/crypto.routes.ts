import { CryptoController } from "../controllers/crypto.controller";
import express from 'express';

const router = express.Router();

router.post('/add', CryptoController.addCrypto);
router.get('/all', CryptoController.getAllCrypto);

export default router;
module.exports = router;