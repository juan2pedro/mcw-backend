import { Table, Column , Model,HasMany ,BelongsToMany} from "sequelize-typescript";
import { STRING,NUMBER ,UUID} from "sequelize";
import { v4 as uuidv4 } from 'uuid'
import { WalletPojo } from "./wallet.model";
import { UserPojo } from "./user.model";
@Table({
    freezeTableName: true,
    schema: 'crypto_fake',
    tableName: 'crypto',
    createdAt: false,
    updatedAt: false
})
export class CryptoPojo extends Model {
    @Column({
        primaryKey: true,
        type: UUID,
        field: 'crypto_id',
        defaultValue: uuidv4(),
    })
    crypto_id : string;

    @Column({
        type: STRING,
        field: 'name',
    })
    name : string;

    @Column({
        type: NUMBER ,
        field:'value',
    })
    value : number;

    @Column({
        type: STRING,
        field:'icon',
    })
    icon: string;

    @Column({
        type: STRING,
        field:'asset',
    })
    asset: string;

    @Column({
        type: NUMBER,
        field:'stock',
    })
    stock: number;

    @HasMany (() => WalletPojo)
    wallet : WalletPojo[];

    @BelongsToMany(() => UserPojo, () => WalletPojo)
    user : UserPojo;
}