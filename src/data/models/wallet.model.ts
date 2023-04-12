import { Table, Column, Model, ForeignKey,BelongsTo } from "sequelize-typescript";
import { NUMBER , UUID} from "sequelize";
import { CryptoPojo } from "./crypto.model";
import { UserPojo } from "./user.model";
import { v4 as uuidv4 } from 'uuid'

@Table({
    freezeTableName: true,
    schema: 'crypto_fake',
    tableName: 'wallet',
    createdAt: false,
    updatedAt: false
})
export class WalletPojo extends Model {
    @Column({
        primaryKey: true,
        type: UUID,
        field: 'id_wallet',
        defaultValue: uuidv4(),
    })
    id_wallet: string;

    @Column({
        type: NUMBER,
        field: 'amount',
    })
    amount: number;

    @ForeignKey(() => CryptoPojo)
    @Column({
        type: UUID,
        field: "crypto_id",
    })
    crypto_id: string;
    @BelongsTo(() => CryptoPojo)
    crypto: CryptoPojo;

    @ForeignKey(() => UserPojo)
    @Column({
        type: UUID,
        field: "user_id",
    })
    user_id: string;

    @BelongsTo(() => UserPojo)
    user: UserPojo;
}