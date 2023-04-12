import { CryptoPojo } from "../models/crypto.model";
import { connect } from "../config/crypto.db.config";
import Logger from '../../utils/logger';

export class CryptoRepository {
    _db: any = {};
    _cryptoRepository: any

    constructor() {
        this._db = connect();
        this._cryptoRepository = this._db.sequelize.getRepository(CryptoPojo);
    }

    async addCrypto(newCrypto: CryptoPojo): Promise<string> {
        try {
            newCrypto = await this._cryptoRepository.create(newCrypto);
            Logger.info(`Crypto Added: ${JSON.stringify(newCrypto)}`);
            return newCrypto.crypto_id;
        } catch (error) {
            Logger.error(`error: ${JSON.stringify(error)}`);
            return error;
        }
    }
    async getAllCryptos(): Promise<CryptoPojo[]> {
        try {
            const cryptos = await this._cryptoRepository.findAll()
            Logger.info(`cryptos: solicitadas`);
            return cryptos;
        } catch (error) {
            Logger.error(`error: ${JSON.stringify(error)}`);
            return [];
        }
    }


}