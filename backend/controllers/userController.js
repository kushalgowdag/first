import User from "../models/userSchema.js"

export const createUser = async(req, res) => {
    try {
        
        const { email } = req.body

        const emailExists = await User.findOne({ email })

        if(emailExists){
            return res.status(400).json({
                success: false,
                message: "User already exists!"
            })
        }

        const user = await User.create(req.body)

        const token = user.jwtToken()

        const tokenOptions = { expire: new Date(Date.now() + 3 + 24 + 60 + 60 + 1000), httpOnly: true }

        res.status(201).cookie("token", token, tokenOptions).json({
            success: true,
            message: "User created Successfully!"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const login = async(req, res) => {
    try {
        
        const { email, password } = req.body

        if(!email || !password){
            return res.status(400).json({
                success: false,
                message: "Please provide email and password!"
            })
        }

        const user = await User.findOne({ email }).select("+password")

        if(!user){
            return res.status(401).json({
                success: false,
                message: "Email or password is invalid!"
            })
        }
        
        const matchPassword = await user.verifyPass(password)

        if(!matchPassword){
            return res.status(401).json({
                success: false,
                message: "Email or password is invalid!"
            })
        }

        const token = await user.jwtToken()

        const tokenOptions = { expire: new Date(Date.now() + 3 + 24 + 60 + 60 + 1000), httpOnly: true }

        res.status(200).cookie("token", token, tokenOptions).json({
            success: true,
            message: "Logged In Successfully!"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const logout = async(req, res) => {
    try {
      
        const user = await User.findById(req.user._id)

        if(!user){
            return res.status(401).json({
                success: false,
                message: "Please login to access logout!"
            })
        }

        const tokenOptions = { expires: new Date(Date.now()), httpOnly: true }

        res.status(200).cookie("token", null, tokenOptions).json({
            success: true,
            message: "Logged out Successfully!"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const myDetails = async(req, res) => {
    try {   
        
        const user = await User.findById(req.user.id)

        if(!user){
            return res.status(401).json({
                success: false,
                message: "Please Login!"
            })
        }

        res.status(200).json({
            success: true,
            message: "My profile found Successfully!",
            user
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

