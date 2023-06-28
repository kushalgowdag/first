import React from 'react'
import { useParams } from "react-router-dom"
import { useGetProductQuery } from '../redux/slices/productApiSlice'
import "./css/product.css"

const Product = () => {
    const { id } = useParams()
    const { isLoading, isError, isSuccess, data, error } = useGetProductQuery(id)
    
    console.log(data)

    let content
    
    if(isLoading){
        content = <h1>Loading...</h1>
    }

    if(isError){
        content = <h1>Error!</h1>
    }

    if(isSuccess){
        content = (
        <>
            <div className='product-display'>
                <div className="product-image-box">
                    <img src='https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-deep-purple-220907-geo_inline.jpg.large.jpg' class="product-image" />
                </div>
                <div className="product-info">
                    <div class="product-name">{data?.product.productName}</div>
                    <div class="product-price">Rs. {data?.product.productPrice}</div>
                </div>
            </div>
        </>
        )
    }

    return (
    <div className='product-page'>
        <div className='product-box'>{content}</div>
    </div>
  )
}

export default Product