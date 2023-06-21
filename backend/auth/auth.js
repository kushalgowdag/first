import jsonwebtoken from "jsonwebtoken"
import User from "../models/userSchema.js"

export const auth = async(req, res, next) =>{
    try {
        const { token } = req.cookies

        if(!token){
            return res.status(401).json({
                success: false,
                message: "Please login!"
            })
        }
             
        const decode = jsonwebtoken.verify(token, process.env.JWT_SECRET)

        req.user = await User.findById(decode._id)

        next()

    } catch (error) {
        console.log(error.message)
    }
}

