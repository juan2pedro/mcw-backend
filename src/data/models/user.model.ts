import { Table, Column , Model,BelongsToMany, HasMany } from "sequelize-typescript";
import { STRING,NUMBER, DATE , UUID} from "sequelize";
import { v4 as uuidv4 } from 'uuid'
import { WalletPojo } from "./wallet.model";
import { CryptoPojo } from "./crypto.model";
@Table({
    freezeTableName: true,
    schema: 'crypto_fake',
    tableName: 'users',
    createdAt: false,
    updatedAt: false
})
export class UserPojo extends Model {
    @Column({
        primaryKey: true,
        type: UUID ,
        field: 'user_id',
        defaultValue: uuidv4(),
    })
    user_id : string;

    @Column({
        type: STRING,
        field: 'username',
    })
    username : string;

    @Column({
        type: STRING,
        field: 'password',
    })
    password : string;

    @Column({
        type: STRING,
        field: 'email',
    })
    email : string;

    @Column({
        type: STRING,
        field: 'fullname',
    })
    fullname : string;

    @Column({
        type: DATE,
        field: 'birthdate',
    })
    birthdate : Date;


    @Column({
        type: NUMBER ,
        field:'deposit',
    })
    deposit : number;

    @Column({
        type: NUMBER,
        field:'status',
    })
    status: number;

    @HasMany(() => WalletPojo)
    wallets : WalletPojo[];

    @BelongsToMany(() => CryptoPojo,() => WalletPojo)
    cryptos : CryptoPojo[];;
}