import React from 'react'
import ig from '../assets/ig.png'

function Footer() {
  return (
<section className='h-[265px] bg-dark p-14' >
    <div  className=' flex items-center justify-center gap-20 flex-wrap: nowrap;'>
 <div>
    <h2 className="font-bold text-[20px] text-white ">Company Info</h2>
     <p className="text-gray-400 text-[16px] ">About Us </p>
     <p className="text-gray-400 text-[16px] ">Team </p>
 </div>

 <div>
    <h2 className="font-bold text-[20px] text-white ">Legal</h2>
     <p className="text-gray-400 text-[18px] ">Policies</p>
     <p className="text-gray-400 text-[18px] ">Terms and Conditions </p>
 </div>

 <div>
    <h2 className="font-bold text-[20px] text-white ">Resources</h2>
     <p className="text-gray-400 text-[18px] ">Vision & Mission </p>
     <p className="text-gray-400 text-[18px] ">Watch a Demo </p>
     <p className="text-gray-400 text-[18px] ">Customers</p>
 </div>

 <div>
    <h2 className="font-bold text-[20px] text-white ">Get in Touch</h2>
     <p className="text-gray-400 text-[18px] ">(234)-xxx-xxx-xxx </p>
     <p className="text-gray-400 text-[18px] ">Lagos, Nigeria</p>
     <p className="text-gray-400 text-[18px] ">Customers</p>
 </div>
 </div>

  <div className=" flex justify-around items-center mt-12">
    <h2 className=" text-[20px] font-semibold text-white">All Rights Reserved 2022</h2>
    <img src={ig} alt="" />
  </div>
 
</section>

  )
}

export default Footer
