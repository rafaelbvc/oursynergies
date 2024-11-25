import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

const secret = process.env.SECRET || ""


export const jwtAuthorization = async(request: Request, response:Response, next: NextFunction) : Promise<void> => {
    
  const authHeader: string | undefined = request.headers.authorization || request.headers.Authorization as string;

 

    if (!authHeader?.startsWith("Bearer ")) {
        return response.status(401).json({ message: "Unauthorized" }) as any;
      }

      const token = authHeader.split(" ")[1]


      jwt.verify(token, secret, (err:any, decoded: any)   => {
        
     

        if(err) return response.status(403).json({ auth: false, message: "Failed to authenticate!", err})

          //@ts-ignore
          request.userId = decoded.userId;
          //@ts-ignore
          request.userRole = decoded.userRole;
        
        next()
    })
}