import React, { useEffect, useState } from 'react'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"
import "./css/slider.css"

const Slider = () => {
    const [previewImg, setPreviewImg] = useState(0)

    const images = [
        "https://www.apple.com/lae/iphone-14-pro/images/key-features/hero/hero__cj6i78tzkp8i_large.jpg",
        "https://www.apple.com/v/iphone-14-pro/h/images/key-features/features/dynamic-island/dd_dynamic_island__b44bx9hr74ty_large.jpg",
        "https://assets.gqindia.com/photos/6343bda4bac0ed8f5bc20d96/16:9/w_1280,c_limit/iPhone-14-Pro-Max-Review_02.jpg"
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            nextBtn()
        }, 5000)
        return () => clearInterval(interval)
    },[])

    const nextBtn = () => {
        setPreviewImg((pre)=> pre < images.length - 1 ? pre + 1 : 0)
    }

    const backBtn = () => {
        setPreviewImg((pre)=> pre !== 0 ? pre - 1: images.length - 1)
    }

  return (
    <div>
        <div className="slider-box">
            <img src={images[previewImg]} className='preview-image' alt="" />
            <button onClick={backBtn}><HiChevronLeft className='arrow-icon left-arrow' /></button>
            <button onClick={nextBtn}><HiChevronRight className='arrow-icon right-arrow' /></button>
        </div>
    </div>
  )
}

export default Slider