import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import mongoConnection from "./db/mongoConnection"

dotenv.config()
const PORT = process.env.PORT || " "


const server = express()

mongoConnection()


server.use(express.json())
server.use(cors({ origin: "*" }))




server.listen(PORT, () => {
    console.log(`Server is up on: http://localhost:${PORT}`)
})