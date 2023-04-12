"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const user_model_1 = require("../models/user.model");
const wallet_model_1 = require("../models/wallet.model");
const crypto_model_1 = require("../models/crypto.model");
const sequelize_typescript_1 = require("sequelize-typescript");
const connect = () => {
    const HOST = 'localhost';
    const PORT = 5432;
    const DB_NAME = 'crypto_fake';
    const DB_USERNAME = 'administrador';
    const DB_PASSWORD = 'Admin1234';
    const DB_SCHEMA = 'crypto_fake';
    const DB_DIALECT = 'postgres';
    const sequelize = new sequelize_typescript_1.Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
        host: HOST,
        dialect: DB_DIALECT,
        schema: DB_SCHEMA,
        port: PORT,
        repositoryMode: true,
        pool: {
            max: 10,
            min: 0,
            acquire: 20000,
            idle: 5000
        }
    });
    sequelize.addModels([wallet_model_1.WalletPojo, user_model_1.UserPojo, crypto_model_1.CryptoPojo]);
    const db = {};
    db.sequelize = sequelize_typescript_1.Sequelize;
    db.sequelize = sequelize;
    return db;
};
exports.connect = connect;
