import { CryptoService } from "../services/crypto.service";
const cryptoService: CryptoService = new CryptoService();

export const CryptoController= {
    addCrypto:(req: any, res: any) => {
        try {
            const newCrypto = req.body;
            cryptoService.addCrypto(newCrypto).then((result) => {
                res.json(result);
            });
        } catch (excepcion) {
            console.log(excepcion);
            res.sendStatus(500);
        }
    },
    getAllCrypto:(_req: any, res: any) => {
        cryptoService.getAllCryptos()
        .then((result) => {
        res.json(result);
        }).catch((excepcion) => {
            console.error(excepcion);
            res.send(500)
        })
    },

}