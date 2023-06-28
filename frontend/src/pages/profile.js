import React, { useEffect } from 'react'
import { useMyDetailsQuery } from '../redux/slices/userApiSlice'
import { Navigate } from 'react-router-dom'

const Profile = () => {
    const {isLoading, isError, isSuccess, data, error} = useMyDetailsQuery()

    console.log(data)

    let content

    if(isLoading){
        <Navigate to="/login " />
        content = <h1>Loading...</h1>
    }

    if(isError){
        content = <h3>error!</h3>
    }

    if(isSuccess){
        content = (
            <div>
                <div>{data?.user?.username}</div>
                <div>{data?.user?.email}</div>
            </div>
        )
    }

  return (
    <div>{content}</div>
  )
}

export default Profile