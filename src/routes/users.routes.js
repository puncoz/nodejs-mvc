import Users                from "./../controllers/users.controller"
import { usersValidations } from "./../middlewares/validations/users.validations"

export default app => {
    app.get("/users", Users.index)
    app.post("/users", usersValidations["create"], Users.store)
    app.get("/users/:userId", Users.detail)
    app.put("/users/:userId", Users.update)
    app.delete("/users/:userId", Users.destroy)
}
