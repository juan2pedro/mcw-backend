import { connect } from "../config/wallet.db.config";
import { WalletPojo } from "../models/wallet.model";
import { UserPojo } from "../models/user.model";
import { CryptoPojo } from "../models/crypto.model";
import Logger from '../../utils/logger';


export class WalletRepository {
    _db: any = {};
    _walletRepository: any;
    _userRepository: any;
    _cryptoRepository: any;

    constructor() {
        this._db = connect();
        this._walletRepository = this._db.sequelize.getRepository(WalletPojo);
        this._userRepository = this._db.sequelize.getRepository(UserPojo);
        this._cryptoRepository = this._db.sequelize.getRepository(CryptoPojo);
    }

    async getAllWallets(): Promise<WalletPojo[]> {
        try {
            const wallets = await this._walletRepository.findAll({ include: [this._userRepository, this._cryptoRepository] });
            Logger.info(`wallets: ${JSON.stringify(wallets)}`);

            return wallets
        } catch (error) {
            Logger.error(`error: ${JSON.stringify(error)}`);
            return []
        }

    }
    async addWallet(newWallet: WalletPojo): Promise<string> {
        try {
            newWallet = this._walletRepository.create(newWallet);
            Logger.info(`wallet: ${JSON.stringify(newWallet)}`);
            return newWallet.id_wallet
        } catch (error) {
            Logger.error(`error: ${JSON.stringify(error)}`);
            return error
        }
    }

    async updateWallet(newWallet): Promise<string> {
        try {
            newWallet = await this._walletRepository
                .update({
                    amount: newWallet.amount,
                    user_id: newWallet.user_id,
                    crypto_id: newWallet.crypto
                }, {
                    where: {
                        id_wallet: newWallet.id_wallet
                    },
                })
                Logger.info(`wallet: ${JSON.stringify(newWallet)}`);
            return newWallet.id_wallet
        } catch (error) {
            Logger.error(`error: ${JSON.stringify(error)}`);
            return error.toString();
        }
    }
}
