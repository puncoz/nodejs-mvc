import { check }     from "express-validator/check"
import { UserModel } from "./../../models"

export const usersValidations = {
    create: [
        check("email").isEmail().withMessage("Invalid email format").custom(email => UserModel.find({where: {email}}).then(u => !!!u)).withMessage("Email exists"),
        check("username").custom(username => UserModel.find({where: {username}}).then(u => !!!u)).withMessage("Username exists"),
        check("password").isLength({min: 6}).withMessage("Password should be greater than 6 characters long."),
    ],

    update: [],
}
