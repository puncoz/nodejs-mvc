import Users from "./../controllers/users.controller"

export default app => {
    app.get("/users", Users.index)
}
