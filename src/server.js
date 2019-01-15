import express        from "express"
import bodyParser     from "body-parser"
import cors           from "cors"
import methodOverride from "method-override"
import Database       from "./database"
import { AppConfig }  from "./config"
import routes         from "./routes"

// init app
const app = express()

// setup the body parser (just standard middle wares)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// enable CORS
app.use(cors())

// setup the method override
app.use(methodOverride("_method"))

// Initialize Database
Database.init()

// Load routes
routes(app)

// Server start
const appName = AppConfig.name,
    appPort = AppConfig.port

app.listen(appPort, () => {
    console.log(`Server for ${appName} started on port: ${appPort}`)
})
