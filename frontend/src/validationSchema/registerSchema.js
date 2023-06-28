import * as Yup from "yup"

const RegisterSchema = Yup.object({
    username: Yup.string().min(3).max(100).required("Please provide Username!"),
    email: Yup.string().email().min(3).max(100).required("Please provide Email!"),
    password: Yup.string().min(4).max(1000).required("Please provide Password!")
})

export default RegisterSchema