import usersRoute from "./users.routes"

export default app => {
    usersRoute(app)

    app.use((req, res, next) => {
        const error = new Error("Not Found")
        error.status = 404
        next(error)
    })

    app.use((error, req, res, next) => {
        res.status(error.status || 500).json({
            error : {
                message : error.message
            }
        });
    });
}
