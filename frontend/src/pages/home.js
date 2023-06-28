import React from 'react'
import Slider from '../components/slider'
import Products from './products'
import { selectAll, selectById } from '../redux/slices/productApiSlice'
import { useGetAllProductsQuery } from '../redux/slices/productApiSlice'

const Home = () => {
  
  return (
    <div>
      <Slider />
    </div>
  )
}

export default Home