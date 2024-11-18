import bcrypt from "bcrypt"

export const encrypt = async(password: string) => {

    const hashedPassword = await bcrypt.hash(password, 11)

    return hashedPassword

}