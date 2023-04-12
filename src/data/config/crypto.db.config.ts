import { CryptoPojo } from "../models/crypto.model";
import {Sequelize} from "sequelize-typescript";
import { UserPojo } from "../models/user.model";
import { WalletPojo } from "../models/wallet.model";
export const connect =() =>{
    const HOST = 'localhost';
    const PORT = 5432;
    const DB_NAME = 'crypto_fake';
    const DB_USERNAME = 'administrador';
    const DB_PASSWORD = 'Admin1234';
    const DB_SCHEMA = 'crypto_fake';
    const DB_DIALECT : any = 'postgres';

    const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
        host: HOST,
        dialect: DB_DIALECT,
        schema: DB_SCHEMA,
        port: PORT,
        repositoryMode: true,
        pool:{
            max:10,
            min:0,
            acquire:20000,
            idle:5000
        }
    })
    sequelize.addModels([UserPojo,WalletPojo, CryptoPojo]);
    const db : any = {}
    db.sequelize = Sequelize;
    db.sequelize = sequelize;
    
    return db
}