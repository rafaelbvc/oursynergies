import { NextFunction, Request, Response } from "express"
import dotenv from "dotenv"
dotenv.config()





export const roleAuthorization = (role: string) => {
    return (request: Request, response: Response, next: NextFunction): void => {
      try {
        const {userRole, userId} = request.userRole as any;
  
        console.log("User Role:", userRole, userId);
  
        if (!userRole) {
          return response.status(403).json({ message: "Role not found for user" }) as any
          // return;
        }
  
        console.log(userRole, role)
        if (userRole !== role) {
          return response
            .status(403)
            .json({ message: "You do not have permission to access this resource" }) as any
          
        }
  
        next();
      } catch (error) {
        response.status(500).json({ message: "Internal Server Error", error });
      }
    };
  };