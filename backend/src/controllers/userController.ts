import { NextFunction, Request, Response } from "express"
import  User  from "../schemas/UserSchema"



export const getUser = async(request: Request, response: Response, next: NextFunction): Promise<void> => {

    const {  email  } = request.params

    if( !email || undefined ){
        response.status(400).json({
            message: "Something wrong!"           
        })
    }
    
    try {

        const userData = await User.findOne({email : email})

        response.status(200).json({status: true, message: "Success!", data: userData})


    } catch (error) {

        console.log(error)

    }

}

export const getUsers = async(request: Request, response: Response, next: NextFunction): Promise<void> => {

    try {

        const usersData = await User.find().lean()

        response.status(200).json({status: true, message: "Success!", data: usersData})


    } catch (error) {

        console.log(error)

    }


}

export const createUser = async(request: Request, response: Response, next: NextFunction): Promise<void> => {

    const { username, email, password, role } = request.body

    if (!username || !email || !password || !role){

        response.status(400).json({
            message: "Something wrong!"           
        })

    }

    try {



        const newUser = {
            username,
            email,
            password,
            role
        }

        await User.create(newUser)

        response.status(200).json({status: true, message: "Success!", data: newUser})

    } catch (error) {

        console.log(error)

    }


}

export const updateUser = (request: Request, response: Response, next: NextFunction) => {




}

export const deleteUser = async(request: Request, response: Response, next: NextFunction): Promise<void> => {

    const { email } = request.params

    if(!email || undefined) {
        response.status(400).json({  message: "Something wrong!"  })

    }

    try {

        const hasUser = await User.findOne({email : email})
        
        if(!hasUser || undefined) {
            response.status(400).json({  message: "Something wrong!"  })
    
        }

        await User.findOneAndDelete({email})

        response.status(200).json({status: true, message: "Success!", data: hasUser})


    } catch (error) {
        console.log(error)
    }

}