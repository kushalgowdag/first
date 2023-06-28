import React, { useEffect, useState } from 'react'
import RegisterSchema from '../validationSchema/registerSchema'
import { useFormik } from "formik"
import { useCreateUserMutation } from '../redux/slices/userApiSlice'
import { useNavigate } from 'react-router-dom'
import "./css/register.css"

const Register = () => {
  const [createUser, {data}] = useCreateUserMutation()
  const [errorMsg, setErrorMsg] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setErrorMsg("")
    }, 3000)
    return () => clearTimeout(startTimer)

  },[errorMsg])

  const initialValues = {
    username: "",
    email: "",
    password: ""
  }

  // console.log(data?.success)
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
    initialValues,
    validationSchema: RegisterSchema,
    onSubmit: async(values, action) => {
      // console.log(values)
      const a = await createUser(values)
      setErrorMsg(a?.error?.data?.message)
      if(a?.data?.success){
        action.resetForm()
        navigate("/")
      }
    }
  })
  
  return (
    <div className='register-page'>
      <div className="register-box">
        <h1 className='register-header'>REGISTER</h1>
        <form className='register-form' onSubmit={handleSubmit}>
          <input type="text" className='register-input input-username' name="username" placeholder="username" value={values.username} onChange={handleChange} onBlur={handleBlur} />
          {errors?.username && touched?.username && <div className='register-error error-username'>{errors.username}</div>}
          <input type="email" className='register-input input-email' name="email" placeholder="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
          {errors?.email && touched?.email && <div className='register-error error-email'>{errors.email}</div>}
          <input type="password" className='register-input input-password' name="password" placeholder="password" autoComplete="off" value={values.password} onChange={handleChange} onBlur={handleBlur} />
          {errors?.password && touched?.password && <div className='register-error error-password'>{errors.password}</div>}
          <div className="register-submit-error">{errorMsg}</div>
          <button className='register-button' type="submit">Register</button>
        </form>    
      </div>
    </div>
  )
}

export default Register