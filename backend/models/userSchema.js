import mongoose from "mongoose";
import bcrypt from "bcrypt"
import jsonwebtoken from "jsonwebtoken"

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, "Please provide username!"],
        maxlength: [50, "Username can't exceed 50 character!"]
    },
    email:{
        type: String,
        required: [true, "Please provide email!"],
        maxlength: [50, "Email can't exceed 50 character!"]
    },
    password:{
        type: String,
        required: [true, "Please provide password!"],
        maxlength: [50, "Password can't exceed 50 character!"],
        select: false
    },
}, { timestamps: true })

userSchema.pre("save", async function(next){
    if(this.isModified("password")){
        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, salt)
    }
    next()
})

userSchema.methods.verifyPass = async function(pass){
    return await bcrypt.compare(pass, this.password)
}

userSchema.methods.jwtToken =  function(){
    return jsonwebtoken.sign({_id: this._id}, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE })
}

const userModel = mongoose.model("user", userSchema)

export default userModel