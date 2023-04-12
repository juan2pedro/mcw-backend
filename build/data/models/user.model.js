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
exports.UserPojo = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_1 = require("sequelize");
const uuid_1 = require("uuid");
const wallet_model_1 = require("./wallet.model");
const crypto_model_1 = require("./crypto.model");
let UserPojo = class UserPojo extends sequelize_typescript_1.Model {
    ;
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        type: sequelize_1.UUID,
        field: 'user_id',
        defaultValue: (0, uuid_1.v4)(),
    }),
    __metadata("design:type", String)
], UserPojo.prototype, "user_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.STRING,
        field: 'username',
    }),
    __metadata("design:type", String)
], UserPojo.prototype, "username", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.STRING,
        field: 'password',
    }),
    __metadata("design:type", String)
], UserPojo.prototype, "password", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.STRING,
        field: 'email',
    }),
    __metadata("design:type", String)
], UserPojo.prototype, "email", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.STRING,
        field: 'fullname',
    }),
    __metadata("design:type", String)
], UserPojo.prototype, "fullname", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DATE,
        field: 'birthdate',
    }),
    __metadata("design:type", Date)
], UserPojo.prototype, "birthdate", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.NUMBER,
        field: 'deposit',
    }),
    __metadata("design:type", Number)
], UserPojo.prototype, "deposit", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.NUMBER,
        field: 'status',
    }),
    __metadata("design:type", Number)
], UserPojo.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => wallet_model_1.WalletPojo),
    __metadata("design:type", Array)
], UserPojo.prototype, "wallets", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => crypto_model_1.CryptoPojo, () => wallet_model_1.WalletPojo),
    __metadata("design:type", Array)
], UserPojo.prototype, "cryptos", void 0);
UserPojo = __decorate([
    (0, sequelize_typescript_1.Table)({
        freezeTableName: true,
        schema: 'crypto_fake',
        tableName: 'users',
        createdAt: false,
        updatedAt: false
    })
], UserPojo);
exports.UserPojo = UserPojo;
