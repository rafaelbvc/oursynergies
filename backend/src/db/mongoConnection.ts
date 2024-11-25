import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()


const URI = process.env.URI || ""



const mongoConnection = async() => {

    try {

        await mongoose.connect(URI)
    }catch(error: any){
        console.log(error, "Something went wrong")
    }

    console.log("Mongo is connected!")

}

export default mongoConnection