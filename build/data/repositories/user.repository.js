"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const user_model_1 = require("../models/user.model");
const user_db_config_1 = require("../config/user.db.config");
const logger_1 = __importDefault(require("../../utils/logger"));
class UserRepository {
    constructor() {
        this._db = {};
        this._db = (0, user_db_config_1.connect)();
        this._userRepository = this._db.sequelize.getRepository(user_model_1.UserPojo);
    }
    getLogin(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this._userRepository.findOne({
                    where: {
                        email: email,
                        password: password,
                        status: 1
                    }
                });
                logger_1.default.warn(`user ${user.email} login success`);
                return user;
            }
            catch (error) {
                logger_1.default.error(`error: ${JSON.stringify(error)}`);
                return error;
            }
        });
    }
    addUser(newUser) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                newUser = yield this._userRepository.create(newUser);
                logger_1.default.info(`user ${newUser.email} add success`);
                return newUser.user_id;
            }
            catch (error) {
                logger_1.default.error(`error: ${JSON.stringify(error)}`);
                return 'error';
            }
        });
    }
    getUserbyId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                logger_1.default.info(`user ${id} get user by id`);
                return yield this._userRepository.findByPk(id);
            }
            catch (error) {
                logger_1.default.error(`error: ${JSON.stringify(error)}`);
                return undefined;
            }
        });
    }
}
exports.UserRepository = UserRepository;
