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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_repository_1 = require("../data/repositories/user.repository");
class UserService {
    constructor() {
        this._userRepository = new user_repository_1.UserRepository();
    }
    getLogin(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const usersPromise = yield this._userRepository
                .getLogin(email, password)
                .then((userAsPojo) => {
                let userAsDTO = this.parsePojoIntoDTO(userAsPojo);
                return userAsDTO;
            })
                .catch((error) => {
                console.error(error);
                throw error;
            });
            return usersPromise;
        });
    }
    addUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const userPojo = this.parseDTOIntoPojo(user);
            const userPromise = yield this._userRepository
                .addUser(userPojo)
                .then((user_id) => {
                console.log(user_id);
                return user_id;
            })
                .catch((error) => {
                console.error(error);
                throw error;
            });
            return userPromise;
        });
    }
    getUserbyId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const userPromise = yield this._userRepository
                .getUserbyId(id)
                .then(userAsPojo => {
                if (!!userAsPojo) {
                    console.log(userAsPojo);
                    return this.parsePojoIntoDTO(userAsPojo);
                }
                else
                    return undefined;
            }).catch(error => {
                console.log(error);
                throw error;
            });
            return userPromise;
        });
    }
    parsePojoIntoDTO(userPojo) {
        const userDTO = {
            user_id: userPojo.dataValues.user_id,
            username: userPojo.dataValues.username,
            password: userPojo.dataValues.password,
            email: userPojo.dataValues.email,
            fullname: userPojo.dataValues.fullname,
            birthdate: userPojo.dataValues.birthdate,
            deposit: userPojo.dataValues.deposit,
            status: userPojo.dataValues.status,
        };
        return userDTO;
    }
    parseDTOIntoPojo(userDTO) {
        return userDTO;
    }
}
exports.UserService = UserService;
