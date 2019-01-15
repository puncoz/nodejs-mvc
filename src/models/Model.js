import DataTypes     from "sequelize"
import { sequelize } from "./../instances/database"

class Model {
    constructor() {
        this.connection = sequelize
        this.dataTypes = DataTypes
        this.model = {}
    }

    init() {
        this.define()

        return this.model
    }

    define() {
        throw new Error("Model class must implement 'define' method")
    }
}

export default Model
