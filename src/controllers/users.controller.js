import { matchedData }      from "express-validator/filter"
import { validationResult } from "express-validator/check"
import { UserModel }        from "./../models"

class User {
    constructor() {}

    index(req, res) {
        UserModel.findAll().then(users => res.json(users))
    }

    store(req, res) {
        const errors = validationResult(req)

        if (!errors.isEmpty())
            return res.status(422).json(errors.array())

        const payload = matchedData(req)

        UserModel.create(payload).then(user => res.send(user))
    }

    detail(req, res) {
        res.send("user detail route")
    }

    update(req, res) {
        res.send("user update route")
    }

    destroy(req, res) {
        res.send("user delete route")
    }
}

export default new User()
