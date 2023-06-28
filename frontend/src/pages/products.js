import React from 'react'
import { useGetAllProductsQuery } from "../redux/slices/productApiSlice"
import { Link } from "react-router-dom"
import "./css/products.css"

const Products = () => {
  const { isLoading, isSuccess, isError, data, error } = useGetAllProductsQuery()

  let content
  
  if(isLoading){
    content = <h1>Loading...</h1>
  }

  if(isError){
    content = <h1>Error!</h1>
  }

  if(isSuccess){
    // console.log(data)
    content = (
      <div className='products-box'>{data?.products.map((pro) => (
        <div className='products-info'>
          <Link className='products-link' to={`/product/${pro._id}`}>
            <img src="https://www.apple.com/kz/iphone-14-pro/images/overview/design/design_startframe__f5z6xj9zkgmu_large.jpg" className='products-image' alt="" />
            <div className='products-name'>{pro?.productName}</div>
            <div className='products-price'>{pro?.productPrice}</div>
          </Link>
        </div>
      ))}</div>
    )
  }

  return (
    <div className='products-page'>
      <div >{content}</div>
    </div>
  )
}

export default Products