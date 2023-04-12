import { NewUserDTO , UserDTO} from './../types';
import { UserRepository } from "../data/repositories/user.repository";
import { UserPojo } from '../data/models/user.model';

export class UserService {
  _userRepository: UserRepository;


  constructor() {
    this._userRepository = new UserRepository();
  }

  async getLogin(email: string, password: string): Promise<UserDTO> {
    const usersPromise = await this._userRepository
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
  }
  async addUser(user: NewUserDTO): Promise<string> {
    const userPojo: UserPojo = this.parseDTOIntoPojo(user);
    const userPromise = await this._userRepository
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
  }
  async getUserbyId (id:string) : Promise<UserDTO | undefined>{
    const userPromise = await this._userRepository
      .getUserbyId(id)
      .then(userAsPojo =>{
        if(!!userAsPojo) {
          console.log(userAsPojo)
          return this.parsePojoIntoDTO(userAsPojo)
        }
        else
            return undefined 
        }) .catch(error=>{
            console.log(error)
            throw error
    })
    return userPromise
  }

  parsePojoIntoDTO(userPojo: UserPojo): UserDTO {
  const userDTO: UserDTO = {
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
  
  parseDTOIntoPojo(userDTO: NewUserDTO): UserPojo {
    return userDTO as unknown as UserPojo;
  }
}