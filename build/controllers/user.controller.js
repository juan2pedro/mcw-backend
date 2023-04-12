"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_service_1 = require("../services/user.service");
const userService = new user_service_1.UserService();
exports.userController = {
    getLogin: (req, res) => {
        console.log(req.body.email);
        console.log(req.body.password);
        const email = req.body.email;
        const password = req.body.password;
        userService
            .getLogin(email, password)
            .then((result) => {
            res.json(result);
        })
            .catch((excepcion) => {
            console.error(excepcion);
            res.send(500);
        });
    },
    addUser: (req, res) => {
        try {
            const newUser = req.body;
            userService.addUser(newUser).then((result) => {
                console.log(result);
                res.json(result);
            });
        }
        catch (excepcion) {
            console.log(excepcion);
            res.sendStatus(500);
        }
    },
    getUserById: (req, res) => {
        try {
            const user_id = req.params.id;
            userService.getUserbyId(user_id).then(result => {
                res.json(result);
            });
        }
        catch (Error) {
            console.log(Error);
            res.sendStatus(500);
        }
    }
};
