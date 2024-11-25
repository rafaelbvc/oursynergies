import {Request, Response} from "express"

export const userLogout = async(request: Request, response:Response): Promise<void> => {

    return  response.json({auth:false, token:null}) as any

}

