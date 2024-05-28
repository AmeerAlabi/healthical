import React from 'react'
import frame1 from '../assets/Frame 11.png'
import frame2 from '../assets/Frame 12.png'
import frame3 from '../assets/Frame 13.png'

function Who() {
  return (
  <section>

<div className="relative text-center p-2">
  <h2 className="text-2xl text-dark p-1">Who is Healthical for?</h2>
  <div className="absolute bottom-0 left-1/2 bg-dark rounded-full h-[7px] w-[60px] transform -translate-x-1/2"></div>
</div>
    
    <div className=' flex justify-around items-center gap-4 mt-10 p-5'>
        <div className=' w-[295px] h-[520px]  shadow-2xl '>
            <img src={frame1} alt="" className='  ' />
            <h2 className=" p-3 text-2xl text-darker font-semibold ">For Individuals</h2>
            <p className=' text-[18px]  p-3 text-darker '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero exercitationem dignissimos harum ipsam odio, facere architecto.</p>
        </div>
   
    



        <div className=' w-[295px] h-[520px]  shadow-xl '>
            <img src={frame2} alt="" className='  ' />
            <h2 className=" p-3 text-2xl text-darker font-semibold ">For Families</h2>
            <p className=' text-[18px] p-3  text-darker '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero exercitationem dignissimos harum ipsam odio, facere architecto.</p>
        </div>
    




    
        <div className=' w-[295px] h-[520px]  shadow-xl '>
            <img src={frame3} alt="" className='  ' />
            <h2 className=" p-3 text-2xl  text-darker font-semibold ">For Hospitals</h2>
            <p className=' text-[18px]  p-3 text-darker '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero exercitationem dignissimos harum ipsam odio, facere architecto.</p>
        </div>
        </div>

  </section>
  )
}

export default Who
