"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletPojo = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_1 = require("sequelize");
const crypto_model_1 = require("./crypto.model");
const user_model_1 = require("./user.model");
const uuid_1 = require("uuid");
let WalletPojo = class WalletPojo extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        type: sequelize_1.UUID,
        field: 'id_wallet',
        defaultValue: (0, uuid_1.v4)(),
    }),
    __metadata("design:type", String)
], WalletPojo.prototype, "id_wallet", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.NUMBER,
        field: 'amount',
    }),
    __metadata("design:type", Number)
], WalletPojo.prototype, "amount", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => crypto_model_1.CryptoPojo),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.UUID,
        field: "crypto_id",
    }),
    __metadata("design:type", String)
], WalletPojo.prototype, "crypto_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => crypto_model_1.CryptoPojo),
    __metadata("design:type", crypto_model_1.CryptoPojo)
], WalletPojo.prototype, "crypto", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_model_1.UserPojo),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.UUID,
        field: "user_id",
    }),
    __metadata("design:type", String)
], WalletPojo.prototype, "user_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_model_1.UserPojo),
    __metadata("design:type", user_model_1.UserPojo)
], WalletPojo.prototype, "user", void 0);
WalletPojo = __decorate([
    (0, sequelize_typescript_1.Table)({
        freezeTableName: true,
        schema: 'crypto_fake',
        tableName: 'wallet',
        createdAt: false,
        updatedAt: false
    })
], WalletPojo);
exports.WalletPojo = WalletPojo;
