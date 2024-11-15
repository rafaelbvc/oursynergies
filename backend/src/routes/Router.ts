import Router from "express"
import { createUser, deleteUser, getUser, getUsers, updateUser } from "../controllers/userController"
import {createUserValidator, patchUserValidator} from "../validations/userValidation"


const router = Router()


router.get("/private/admin/users", getUsers)

router.get("/private/member/user/:email", getUser)

router.post("/public/user/create", createUserValidator ,createUser)

router.patch("/private/member/update/:email",patchUserValidator, updateUser)

router.delete("/private/member/delete/:email", deleteUser)


export default router