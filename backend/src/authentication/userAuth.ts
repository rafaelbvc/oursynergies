import { Response, Request } from "express";
import  jsonwebtoken from "jsonwebtoken"
import User from "../schemas/UserSchema"
import dotenv from "dotenv"
import bcrypt from "bcrypt"
dotenv.config()


const secret = process.env.SECRET || ""



export const userAuth = async(request: Request, response: Response): Promise<void> => {

    const  {email, password}  = request.body
    

    if(!email) {
        return response.status(404).json({ message: "Something wrong!"}) as any
    }



    const userData = await User.findOne({email})

    if(!userData) {

        return response.status(404).json({ message: "No users, please register first!"}) as any

    }


    const hashedPassword = await bcrypt.hash(password, 11 )

    const validate = await bcrypt.compare(password, hashedPassword) as any

    if(validate){
        const id = userData._id
        const token = jsonwebtoken.sign({id}, secret, {
            expiresIn: 3000
        })
        return response.json({auth: true, token: token}) as any
    }

    return response.status(500).json({ message: "Invalid login!" }) as any

}