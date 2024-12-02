import { NextFunction, Request, Response } from "express"
import dotenv from "dotenv"
import { rolesLevel } from "../utils/rolesLevel";
dotenv.config()





export const roleAuthorization = (role: string) => {
    return (request: Request, response: Response, next: NextFunction): void => {

    
      try {
        const userRole = request.userRole 
        const userId = request.userId
  
        console.log("User Role:", userRole, userId);
  
        if (!userRole ) {
          return response.status(403).json({ message: "Role not found for user" }) as any
        }
  
        console.log(userRole, role)

        const checkPermission =  rolesLevel(role)
        const permission = rolesLevel(userRole)


        console.log(checkPermission, permission, "acesslevel")

        if(permission && checkPermission && permission >= checkPermission  ) {
         next()
        }


        return response
          .status(403)
          .json({ message: "You do not have permission to access this resource" }) as any
          
      
  
      } catch (error) {
         return response.status(500).json({ message: "Internal Server Error", error }) as any
      }
    };
  };