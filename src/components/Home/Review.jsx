import React from 'react'

import user1 from '../assets/Ellipse 1.svg'
import user2 from '../assets/Ellipse 2.png'
import user3 from '../assets/Ellipse 3.png'

function Review() {
  return (
  <section className=' bg-dark h-[500px] mt-16 '>


<div className="relative text-center p-2">
  <h2 className="text-2xl text-white p-1">What our users have to say </h2>
  <div className="absolute bottom-0 left-1/2 bg-white rounded-full h-[7px] w-[60px] transform -translate-x-1/2"></div>
</div>

   <div className=' flex justify-center items-center gap-2 mt-12'>


    <div className=' w-[351px] text-center '>
        <img src={user1} alt="" className=' m-auto' />
        <p className="  text-[18px] text-white p-2  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore inventore quidem, adipisci distinctio velit voluptatem cumque sapiente repudiandae blanditiis earum.</p>
    </div>


    <div className=' w-[351px] text-center '>
        <img src={user2} alt="" className=' m-auto' />
        <p className="  text-[18px] text-white p-2  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore inventore quidem, adipisci distinctio velit voluptatem cumque sapiente repudiandae blanditiis earum.</p>
    </div>


    <div className=' w-[351px] text-center '>
        <img src={user3} alt="" className=' m-auto' />
        <p className="  text-[18px] text-white p-2  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore inventore quidem, adipisci distinctio velit voluptatem cumque sapiente repudiandae blanditiis earum.</p>
    </div>




   </div>
    </section>
  )
}

export default Review
