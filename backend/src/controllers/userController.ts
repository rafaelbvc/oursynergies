import { NextFunction, Request, Response } from "express"
import  User  from "../schemas/UserSchema"
import { validationResult } from "express-validator"
import { encrypt } from "../services/encrypt"



export const getUser = async(request: Request, response: Response): Promise<void> => {

    const {  email  } = request.params

    if( !email || undefined ){
        response.status(400).json({
            message: "Something wrong!"           
        })
    }
    
    try {

        const userData = await User.findOne({email : email})

        if( !userData || undefined ){
            response.status(400).json({
                message: "Something wrong!"           
            })
        }

        response.status(200).json({status: true, message: "Success!", data: userData})


    } catch (error) {

        console.log(error)

    }

}

export const getUsers = async(request: Request, response: Response): Promise<void> => {

    try {

        const usersData = await User.find().lean()


        if(!usersData || undefined) {
            response.status(400).json({
                message: "Something wrong!"           
            })
        }

        response.status(200).json({status: true, message: "Success!", data: usersData})


    } catch (error) {
        
        console.log(error)
        
    }
}

export const createUser = async(request: Request, response: Response): Promise<void> => {


    const { username, email, password, role } = request.body

    const errors = validationResult(request)

    if(!errors.isEmpty()){
        return response.status(400).json({ errors: errors })  as any
    }

    const hasUser = await User.findOne({email})

    const hashedPassword = await  encrypt(password)

    if (hasUser) {
        response.status(400).json({
            message: "The user already exists!"           
        })

    }

    try {

        const newUser = {
            username,
            email,
            password: hashedPassword,
            role
        }

        await User.create(newUser)

        response.status(200).json({status: true, message: "Success!", data: newUser})

    } catch (error) {

        console.log(error)

    }


}

export const updateUser = async(request: Request, response: Response): Promise<void> => {


    const {  email } = request.params

    const {  username, password, role} = request.body

    if( !email || undefined ){
        response.status(400).json({
            message: "Something wrong!"           
        })
    }

    const errors = validationResult(request)

    if(!errors.isEmpty()){
        return response.status(400).json({ errors: errors.array() }) as any
    }

    const hashedPassword = await encrypt(password)
    
    try {

        const userData = await User.findOne({email : email})

        if( !userData || undefined ){
            response.status(400).json({
                message: "Something wrong!"           
            })
        }

        const userUpdate = {
            username,
            email,
            password: hashedPassword,
            role
        }

        await User.findOneAndUpdate({email}, userUpdate)

        response.status(200).json({status: true, message: "Success, user updated!", data: userUpdate})


    } catch (error) {

        console.log(error)

    }


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

        response.status(200).json({status: true, message: "Success, user deleted!", data: hasUser})


    } catch (error) {
        console.log(error)
    }

}