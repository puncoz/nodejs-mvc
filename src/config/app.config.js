import "dotenv/config"

export default {
    name: process.env.APP_NAME || "NodeJS App",
    port: process.env.APP_PORT || 3000,
}
