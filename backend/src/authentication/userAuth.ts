import { Response, Request } from "express";
import  jsonwebtoken from "jsonwebtoken"
import User from "../schemas/UserSchema"
import dotenv from "dotenv"
import bcrypt from "bcrypt"
dotenv.config()


const secret = process.env.SECRET || ""



export const userAuth = async(request: Request, response: Response): Promise<void> => {

    const  {email, password}  = request.body
    

    if(!email || !password) {
        return response.status(400).json({ message: "Missing Email or Password!"}) as any
    }

    try {


        const userData = await User.findOne({email})

        if(!userData) {

            return response.status(404).json({ message: "No users, please register first!"}) as any
    
        }

        const hashedPassword = await bcrypt.hash(password, 11 )
        const validate = await bcrypt.compare(password, hashedPassword) as any

        if(validate){
            const userId = userData._id
            const userRole = userData.role
            const token = jsonwebtoken.sign({userId, userRole}, secret, {
                expiresIn: 3000
            })

            
            
            return response.json({auth: true, token: token}) as any
        }
    
        
    } catch (error) {
        return response.status(500).json({ message: "Forbidden!" }) as any
    }

}