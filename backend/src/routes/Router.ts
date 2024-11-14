import Router from "express"
import { createUser, deleteUser, getUser, getUsers } from "../controllers/userController"


const routes = Router()


routes.post("/public/user/create", createUser)

routes.get("/private/admin/users", getUsers)

routes.get("/private/member/user/:email", getUser)

routes.delete("/private/member/delete/:email", deleteUser)


export default routes