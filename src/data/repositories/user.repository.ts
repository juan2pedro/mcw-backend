import { UserPojo } from "../models/user.model";
import { connect } from "../config/user.db.config";
import Logger from '../../utils/logger';

export class UserRepository {
    _db : any = {}
    _userRepository: any;

    constructor() {
        this._db = connect();
        this._userRepository = this._db.sequelize.getRepository(UserPojo)
    }

    async getLogin(email:string, password:string): Promise<UserPojo> {
        try {
            const user = await this._userRepository.findOne({
                where: {
                    email: email,
                    password: password,
                    status : 1
                }
            });
            Logger.warn(`user ${user.email} login success`);

            return user;
        } catch (error) {
            Logger.error(`error: ${JSON.stringify(error)}`);
        return error;
        }
    }

    async addUser (newUser: UserPojo) : Promise<string>{
        try{
            newUser = await this._userRepository.create(newUser)
            Logger.info(`user ${newUser.email} add success`);
            return newUser.user_id
        } catch (error) {
            Logger.error(`error: ${JSON.stringify(error)}`);
            return 'error'
        }
    }
    async getUserbyId(id:string) : Promise<UserPojo | undefined>{
        try{
            Logger.info(`user ${id} get user by id`);

            return await this._userRepository.findByPk(id)
        }catch (error) {
            Logger.error(`error: ${JSON.stringify(error)}`);
            return undefined
        }
    }
}