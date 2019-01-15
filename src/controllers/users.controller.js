class User {
    constructor() {}

    index(req, res) {
        res.send("hello from controller file")
    }
}

export default new User()
