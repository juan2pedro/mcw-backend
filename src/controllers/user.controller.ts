import { UserService } from "../services/user.service";
const userService: UserService = new UserService();

export const userController = {
  getLogin: (req: any, res: any) => {
    console.log(req.body.email)
    console.log(req.body.password)
    const email = req.body.email
    const password = req.body.password
    userService
      .getLogin(email,password)
      .then((result) => {
        res.json(result);
      })
      .catch((excepcion) => {
        console.error(excepcion);
        res.send(500);
      });
  },
  addUser: (req: any, res: any) => {
    try {
      const newUser = req.body;
      userService.addUser(newUser).then((result) => {
        console.log(result);
        res.json(result);
      })
    } catch (excepcion) {
      console.log(excepcion);
      res.sendStatus(500);
    }
  },
  getUserById : (req: any, res: any) =>{
    try{
        const user_id = req.params.id
        userService.getUserbyId(user_id) .then (result =>{
            res.json(result)
        })
    } 
    catch (Error){
        console.log(Error)
        res.sendStatus(500)
    }
  }
}