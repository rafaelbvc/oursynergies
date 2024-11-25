import {  body  } from "express-validator"

 export  const createUserValidator = [
        body("username")
        .exists({checkFalsy: true})
        .withMessage("User name is required")
        .isString()
        .withMessage("User name should be string")
        .isLength({ min: 3 })
        .withMessage("Name must have at least 3 characters"),
        body("email")
        .exists()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Email should be valid"),
        body("password")        
        .exists()
        .withMessage("Password is required")
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,15}/)
        .withMessage("Password should be valid"),
        body("role")
        .exists()
        .isString()
        .withMessage("Need to set a role")
        .isIn(["admin","member","viewer"])
        .withMessage("Invalid role")
    ]


     export  const patchUserValidator = [
         body("username")
         .optional()
         .isString()
         .withMessage("User name should be string")
         .isLength({ min: 3 })
         .withMessage("Name must have at least 3 characters"),
         body("password")        
         .optional()
         .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,15}/)
         .withMessage("Password should be valid"),
         body("role")
         .optional()
         .isString()
         .withMessage("Need to set a role")
         .isIn(["admin","member","viewer"])
         .withMessage("Invalid role")
     ]




export const deleteUserValidator = [
    body("email")
    .exists()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email should be valid")
]