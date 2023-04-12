import { userController } from "../controllers/user.controller";
import express from 'express';

const router = express.Router();

router.post('/add', userController.addUser);
router.post('/login', userController.getLogin);

export default router;
module.exports = router;