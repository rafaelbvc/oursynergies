import Router from "express"
import { createUser, deleteUser, getUser, getUsers, updateUser } from "../controllers/userController"


const routes = Router()




routes.get("/private/admin/users", getUsers)

routes.get("/private/member/user/:email", getUser)

routes.post("/public/user/create", createUser)

routes.patch("/private/member/update/:email", updateUser)

routes.delete("/private/member/delete/:email", deleteUser)


export default routes