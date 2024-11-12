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

export const getUsers = (request: Request, response: Response, next: NextFunction) => {




}

export const createUser = (request: Request, response: Response, next: NextFunction) => {




}

export const updateUser = (request: Request, response: Response, next: NextFunction) => {




}

export const deleteUser = (request: Request, response: Response, next: NextFunction) => {




}