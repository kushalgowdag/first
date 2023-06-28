import React, { useEffect, useState } from 'react'
import LoginSchema from '../validationSchema/loginSchema'
import { useFormik } from "formik"
import { useLoginMutation } from '../redux/slices/userApiSlice' 
import { Link, useNavigate } from "react-router-dom"
import "./css/login.css"

const Login = () => {
  const [login, { isError, error }] = useLoginMutation()
  const [errorMsg, setErrorMsg] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    const time = setTimeout(() => { 
      setErrorMsg("")
    }, 3000)  
    return () => clearTimeout(time)
  },[errorMsg])
  
  const initialValues = {
    email: "",
    password: ""
  }
  
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit: async(values, action) => {
      const a = await login(values)
      setErrorMsg(a?.error?.data?.message)
      if(a?.data?.success){
        action.resetForm()
        navigate("/")
      }
    }
  })
  
  return (
    <div className='login-page'>
      <div className="login-box">
        <h1 className='login-header'>LOGIN</h1>
        <form className='login-form' onSubmit={handleSubmit}>
          <input type="email" className='login-input input-email' name="email" placeholder="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
          {errors?.email && touched?.email && <div className='login-error error-email'>{errors.email}</div>}
          <input type="password" className='login-input input-password' name="password" placeholder="password" autoComplete="off" value={values.password} onChange={handleChange} onBlur={handleBlur} />
          {errors?.password && touched?.password && <div className='login-error error-password'>{errors.password}</div>}
          <div className='login-submit-error'>{errorMsg}</div>
          <button className='login-button' type="submit">Login</button>
        </form>
        <hr className='login-hr'/>
        <Link className='register-link' to="/register"><div >Register</div></Link>
      </div>
    </div>
  )
}

export default Login