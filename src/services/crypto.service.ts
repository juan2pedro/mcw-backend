import { NewCryptoDTO, CryptoDTO } from "../types";
import { CryptoRepository } from "../data/repositories/crypto.repository"
import { CryptoPojo } from "../data/models/crypto.model";

export class CryptoService {
    _cryptoRepository: CryptoRepository;

    constructor() {
        this._cryptoRepository = new CryptoRepository();
    }
    async addCrypto(crypto: NewCryptoDTO): Promise<string> {

        const cryptoPojo: CryptoPojo = this.parseDTOIntoPojo(crypto);
        const cryptoPromise = await this._cryptoRepository
            .addCrypto(cryptoPojo)
            .then((crypto_id) => {
                console.log(crypto_id);
                return crypto_id;
            })
            .catch((error) => {
                console.error(error);
                throw error;
            })
        return cryptoPromise;
    }

    async getAllCryptos(): Promise<CryptoDTO[]> {
        const cryptosPromise = await this._cryptoRepository
        .getAllCryptos()
        .then((cryptosAsPojo) => {
            let cryptosAsDTO:CryptoDTO[] = [];
            cryptosAsPojo.forEach((cryptoAsPojo) => {
                let cryptoAsDTO = this.parseDTOIntoPojo(cryptoAsPojo);
                cryptosAsDTO.push(cryptoAsDTO);
            })
            return cryptosAsDTO;
        }).catch((error) => {
            console.error(error);
            throw error;
        })
        return cryptosPromise;
    }

    parsePojoIntoDTO(cryptoPojo: CryptoPojo): CryptoDTO {
        const cryptoDTO: CryptoDTO ={
            crypto_id: cryptoPojo.dataValues.crypto_id,
            name: cryptoPojo.dataValues.name,
            value: cryptoPojo.dataValues.value,
            icon: cryptoPojo.dataValues.icon,
            asset: cryptoPojo.dataValues.asset,
            stock: cryptoPojo.dataValues.stock
        }
        return cryptoDTO;
    }
    parseDTOIntoPojo(cryptoDTO: NewCryptoDTO): CryptoPojo {
        return cryptoDTO as unknown as CryptoPojo;
    }

}