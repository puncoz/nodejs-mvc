import Model from "./Model"

class User extends Model {
    define() {
        this.model = this.connection.define("users", {
            id: {
                type: this.dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            username: this.dataTypes.STRING,
            email: this.dataTypes.STRING,
            password: this.dataTypes.STRING,
        })
    }
}

export default new User()
