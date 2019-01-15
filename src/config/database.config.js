import "dotenv/config"

export default {
    driver: process.env.DB_DRIVER || "mysql",
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || "3306",
    name: process.env.DB_NAME || "nodejs_app",
    user: process.env.DB_USER || "root",
    pass: process.env.DB_PASS || "secret",
}
