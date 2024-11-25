import Router, { Request, Response } from "express"
import { createUser, deleteUser, getUser, getUsers, updateUser } from "../controllers/userController"
import {createUserValidator, patchUserValidator} from "../validations/userValidation"
import { userAuth } from "../authentication/userAuth"
import { jwtAuthorization } from "../middlewares/jwtAuthorization"
import { userLogout } from "../authentication/userLogout"
import { roleAuthorization } from "../middlewares/roleAuthorization"


const router = Router()


router.get("/private/admin/users", jwtAuthorization, roleAuthorization("admin"), getUsers)

router.get("/private/member/user", jwtAuthorization, roleAuthorization("member") , getUser)

router.post("/public/user/create", createUserValidator ,createUser)

router.patch("/private/member/update", jwtAuthorization,patchUserValidator, updateUser)

router.delete("/private/member/delete", jwtAuthorization, deleteUser)

router.post("/public/user/login", userAuth)

router.post("/private/user/logout", jwtAuthorization, userLogout)


export default router