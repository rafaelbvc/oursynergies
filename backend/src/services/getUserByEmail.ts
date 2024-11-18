 import { NextFunction, Request, Response } from "express"
 import User from "../schemas/UserSchema"

 export const getUserByEmail = async(param: String, request: Request, response: Response, next: NextFunction) : Promise<void> => {

    if(!param) {
        return response.status(404).json({ message: "Something wrong!"}) as any
    }
        try {

            const userData = await User.findOne(param)

            if(!userData) {

                return response.status(404).json({ message: "No users, please register first!"}) as any

            }



        return userData as any



        } catch (error: any) {
            console.log(error, "from getUserByEmail")
            next()
        }

 }
 