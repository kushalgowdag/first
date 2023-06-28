import * as Yup from "yup"

const LoginSchema = Yup.object({
    email: Yup.string().email().max(1000).required("Please provide Email!"),
    password: Yup.string().max(10000).required("Please provide Password!")
})

export default LoginSchema