import { Sequelize } from "sequelize"
import { DBConfig }  from "./../config"

export const sequelize = new Sequelize(DBConfig.name, DBConfig.user, DBConfig.pass, {
    host: DBConfig.host,
    port: DBConfig.port,
    dialect: "mysql",
})

sequelize.authenticate().then(() => {
    console.log("Database Connection has been established successfully.")
}).catch(err => {
    console.error("Unable to connect to the database: ", err)
})
