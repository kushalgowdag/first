import mongoose from "mongoose";

export const dbConnection = async () => {
    try {
        
        const { connection } = await mongoose.connect(process.env.DB)

        console.log(`Database running on: ${connection.host}`)

    } catch (error) {
        console.log(error.message)
    }
}
