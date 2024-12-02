import { NextFunction, Request, Response } from "express";
import User from "../schemas/UserSchema"

export const emailRecover = async(request: Request, response: Response, next: NextFunction): Promise<void> => {

    const { username } = request.body

    try {

        const userData = await User.exists({ username}).lean()

        console.log(userData, "fdff")
       return  response.status(200).json({message: "userData", userData}) as any

    } catch(error) {

        console.log(error)

    }

}