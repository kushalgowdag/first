import React from 'react'
import { Link } from "react-router-dom"
import { HiOutlineUser, HiOutlineHeart, HiOutlineShoppingBag, HiOutlineLogout } from "react-icons/hi"
import "./css/navbar.css"
import { useLogoutMutation } from '../redux/slices/userApiSlice'

const Navbar = () => {
    const [logout] = useLogoutMutation()
    const loggingOut = async() => {
        const a = await logout()
        console.log(a?.error?.data)
    }
  return (
    <header>
        <nav>
            <div className="logoBox">
                {/* <img src="" alt="EVENPOLE" /> */}
                <Link style={{ textDecoration: "none"}} to="/"><div className="logo">EVENPOLE</div></Link> 
            </div>
            <div className="navLinks">
                <ul>
                    <li><Link className='navLink' to="/">HOME</Link></li>
                    <li><Link className='navLink' to="/products">PRODUCTS</Link></li>
                    <li><Link className='navLink' to="/about/us">ABOUT US</Link></li>
                </ul>
            </div>
            <div className="navIcons">
                <Link className='navIcon' to="/login"><HiOutlineUser /></Link>
                <Link className='navIcon' to="/"><HiOutlineHeart /></Link>
                <Link className='navIcon' to="/"><HiOutlineShoppingBag /></Link>
                <Link className='navIcon' to="/"><button onClick={loggingOut}><HiOutlineLogout /></button></Link>
            </div>
        </nav>
    </header>
  )
}

export default Navbar