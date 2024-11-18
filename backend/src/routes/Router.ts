import Router, { Request, Response } from "express"
import { createUser, deleteUser, getUser, getUsers, updateUser } from "../controllers/userController"
import {createUserValidator, patchUserValidator} from "../validations/userValidation"
import { userAuth } from "../authentication/userAuth"
import { jwtAuthorization } from "../middlewares/jwtAuthorization"
import { userLogout } from "../authentication/userLogout"


const router = Router()


router.get("/private/admin/users", jwtAuthorization, getUsers)

router.get("/private/member/user/:email", jwtAuthorization , getUser)

router.post("/public/user/create", createUserValidator ,createUser)

router.patch("/private/member/update/:email", jwtAuthorization,patchUserValidator, updateUser)

router.delete("/private/member/delete/:email", jwtAuthorization, deleteUser)

router.post("/public/user/login", userAuth)

router.post("/private/user/logout", jwtAuthorization, userLogout)


export default router