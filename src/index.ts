import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import userRouter from './routes/user.routes';
import cryptoRouter from './routes/crypto.routes';
import walletRouter from './routes/wallet.routes';
import Logger from './utils/logger';


const app: Express = express();
const cors = require('cors');
const port = process.env.PORT;
const whitelist = ['http://localhost:4200'];

app.use(express.json())
app.use(cors({origin: whitelist}))

app.get('/ping', (_req: Request, res: Response) => {
  res.send('Pong!');
});


app.use('/api/user',userRouter)
app.use('/api/crypto',cryptoRouter)
app.use('/api/wallet', walletRouter)

app.listen(port, () => {
  Logger.info(`⚡️⚡️⚡️⚡️⚡️ Server is running at http://localhost:${port}⚡️⚡️⚡️⚡️⚡️`)
});