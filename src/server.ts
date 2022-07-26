import express, { Application, Request, Response, NextFunction } from "express"
import cors from "cors"
import mongoose from "mongoose"
import listEndPoints from "express-list-endpoints"
import exercisesRouter from "./services/exercise/index"
import usersRouter from "./services/user/index"
import { notFound, serverError } from "./errorhandler"
import indexRouter from "./services/index/index"

import dotenv from "dotenv"

dotenv.config() // Load .env file

const app = express() // create express app
const port = process.env.PORT || 5000 // 5000 is the default port if not specified in .env
const uri = process.env.MONGO_CONNECTION_STRING
if (!port) throw new Error("No port specified")
if (!uri) throw new Error("No uri specified")

//app.use Mounts the specified middleware function or functions at the
//specified path: the middleware function is executed when the base of the requested path matches path.

app.use(cors()) // allow all requests from all domains, unless specifically configured otherwise
app.use(express.json()) // This allows us to send JSON to the server
app.use("/exercises", exercisesRouter)
app.use("/users", usersRouter) // Mount the router on the path /users so to access the routes we need to go to localhost:5000/users
app.use("/", indexRouter)
app.use(serverError)
app.get("*", notFound) // If the user tries to access a route that doesn't exist, we will send them to the notFound function

console.table(listEndPoints(app))

mongoose.connect(uri, async () => {
    console.log("🍃 Successfully Connected to MongoDB") //Once the connection is established, we print a message to the console
})

app.listen(port, async () => {
    // listen on port(5000) for incoming requests
    console.log(`Server is running on port ${port}`)
})

export default app
