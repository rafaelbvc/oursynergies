import Router from "express"
import { createUser, deleteUser, getUsers } from "../controllers/userController"


const routes = Router()


routes.post("/public/user/create", createUser)

routes.get("/private/admin/users", getUsers)

routes.delete("/private/member/delete/:email", deleteUser)


export default routes