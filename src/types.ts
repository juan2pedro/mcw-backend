export class UserDTO {
    user_id:string;
    username:string;
    password:string;
    email:string;
    fullname:string;
    birthdate:Date;
    deposit:number;
    status:boolean;
}

export class CryptoDTO {
    crypto_id:string;
    name:string;
    value:number;
    icon:string;
    asset:string;
    stock:number;

}
export class WalletDTO {
    id_Wallet:string;
    amount:number;
    user_id: string;
    user?: UserDTO;
    crypto_id : string;
    crypto?: CryptoDTO;
}

export type NewUserDTO = Omit<UserDTO, "user_id">;
export type NewCryptoDTO = Omit<CryptoDTO, "crypto_id">;
export type NewWalletDTO = Omit<WalletDTO, "id_wallet">;
