import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <section className=' h-[65px] flex justify-around items-center p-3 '>
        <img src={logo} alt="" />
        <ul className='flex justify-center items-center gap-4  font-semibold text-dark'>
            <li> <Link to="/Homepage">Home</Link></li>
            <li> <Link  to="/">Services</Link></li>
            <li><Link  to="/Aboutpage">About Us </Link></li>
            <li> <Link to="/Careerpage"> Career </Link></li>
        </ul>
        <div className='gap-2'>
            <button className=' w-[112px] h-[42px] rounded-lg text-dark p-1 border-[2px] border-dark '> <Link to="/">Sign up</Link></button>
            <button className=' w-[112px] h-[44px] rounded-lg text-white p-1  bg-dark  ml-3'> <Link to="/login">Login</Link></button>
        </div>
    </section>
  )
}

export default Navbar
