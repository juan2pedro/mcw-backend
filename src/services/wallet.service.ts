import { NewWalletDTO, WalletDTO, CryptoDTO, UserDTO } from "../types";
import { WalletRepository } from "../data/repositories/wallet.repository"
import { CryptoRepository } from "../data/repositories/crypto.repository"
import { UserRepository } from "../data/repositories/user.repository"
import { WalletPojo } from "../data/models/wallet.model";


export class WalletService {
    _walletRepository: WalletRepository
    _cryptoRepository: CryptoRepository
    _userRepository: UserRepository

    constructor() {
        this._walletRepository = new WalletRepository();
        this._cryptoRepository = new CryptoRepository();
        this._userRepository = new UserRepository();
    }

    async getAllWallets(): Promise<WalletDTO[]> {
        const walletPromise = await this._walletRepository.getAllWallets().then(walletAsPojo => {
            let walletsAsDTO: WalletDTO[] = []
            walletAsPojo.forEach(walletAsPojo => {
                let walletAsDTO = this.parsePojoIntoDTO(walletAsPojo)
                walletsAsDTO.push(walletAsDTO)
            })
            return walletsAsDTO
        }).catch(error => {
            console.log(error)
            throw error
        })
        return walletPromise
    }

    async addWallet(wallet: WalletDTO): Promise<string> {
        const walletPojo: WalletPojo = this.parseDTOIntoPojo(wallet)
        const walletPromise = await this._walletRepository
            .addWallet(walletPojo)
            .then((wallet_id) => {
                return wallet_id
            })
            .catch((error) => {
                console.error(error)
                throw error
            })
        return walletPromise
    }

    async updateWallet(walletUpdated: WalletDTO): Promise<string> {
        const walletPojo: WalletPojo = this.parseDTOIntoPojo(walletUpdated)
        const walletPromise = await this._walletRepository.
            updateWallet(walletPojo).then(id_wallet => {
                return id_wallet
            }).catch(error => {
            console.error(error)
            throw error
        })
        return walletPromise
    }

    parsePojoIntoDTO(walletPojo: WalletPojo): WalletDTO {
        const userDTO: UserDTO = {
            user_id: walletPojo.dataValues.user_id,
            username: walletPojo.dataValues.user?.dataValues.username,
            password: walletPojo.dataValues.user?.dataValues.password,
            email: walletPojo.dataValues.user?.dataValues.email,
            fullname: walletPojo.dataValues.user?.dataValues.fullname,
            birthdate: walletPojo.dataValues.user?.dataValues.birthdate,
            deposit: walletPojo.dataValues.user?.dataValues.deposit,
            status: walletPojo.dataValues.user?.dataValues.status
        }

        const cryptoDTO: CryptoDTO = {
            crypto_id: walletPojo.dataValues.crypto_id,
            name: walletPojo.dataValues.crypto?.dataValues.name,
            value: walletPojo.dataValues.crypto?.dataValues.value,
            icon: walletPojo.dataValues.crypto?.dataValues.icon,
            asset: walletPojo.dataValues.crypto?.dataValues.asset,
            stock: walletPojo.dataValues.crypto?.dataValues.stock,
        }
        const walletDTO: NewWalletDTO = {
            id_Wallet: walletPojo.dataValues.id_wallet,
            amount: walletPojo.dataValues.amount,
            user_id: walletPojo.dataValues.user_id,
            user: userDTO,
            crypto_id: walletPojo.dataValues.crypto_id,
            crypto: cryptoDTO,
        }
        return walletDTO

    }
    parseDTOIntoPojo(walletDTO: WalletDTO): WalletPojo {
        return walletDTO as unknown as WalletPojo
    }
}