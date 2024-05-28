import React from 'react'
import tired from '../components/assets/tired.svg'
import human from '../components/assets/human.svg'
import fun from '../components/assets/fun.svg'
import laptop from '../components/assets/laptop.svg'
import Footer from '../components/Home/Footer'

function Benefits() {
  return (
    <section className=' mt-36'>
        <div>
            <h2 className=" text-[20px] text-dark text-center font-semibold ">Why You Should Join US</h2>
            <p className=" text-[25px] text-center mt-1 p-1">
                Only the people who turn risks to oppurtunity works with us.
            </p>
        </div>


         <div className=' flex justify-center gap-3 items-center mt-20 '>
            <div className=' bg-sky w-[480px] h-[300px] rounded-lg p-3  '>
               <div className=' w-[432px] m-auto'>
               <img src={tired} alt="" className=' m-auto' />
                <h2 className=" text-[22px]   p-1 text-center text-darker ">Escape conventional workplaces </h2>
                <p className=" text-[18px] text-center text-darker">
                At Healthical, we are friends before we are a team. We are far from your typical everyday 9-5 norm.

                </p>
               </div>
            </div>
       



            <div className=' bg-peach w-[480px] h-[300px] rounded-lg  p-3 '>
               <div className=' w-[432px] m-auto'>
               <img src={fun} alt="" className=' m-auto' />
                <h2 className=" text-[22px]   p-1 text-center text-darker ">Have fun at work </h2>
                <p className=" text-[18px] text-center text-darker">
                What is life without excitement? Heathical is a fun and engaging space for her team!


                </p>
               </div>
            </div>
            </div>


         <div className=' flex justify-center gap-3 items-center mt-5 p-3 '>
            <div className=' bg-peach w-[480px] h-[300px] rounded-lg  '>
               <div className=' w-[432px] m-auto'>
               <img src={human} alt="" className=' m-auto p-3' />
                <h2 className=" text-[22px]   p-1 text-center text-darker ">Learn more about yourself </h2>
                <p className=" text-[18px] text-center text-darker">
                At Healthical, we give our team members the chance to explore their creativity, skills and thoughts. You could learn a lot of things you never knew, if you join us!

                </p>
               </div>
            </div>



            <div className=' bg-sky w-[480px] h-[300px] rounded-lg  p-3 '>
               <div className=' w-[432px] m-auto'>
               <img src={laptop} alt="" className=' m-auto  ' />
                <h2 className=" text-[22px]   p-1 text-center text-darker ">Build your career </h2>
                <p className=" text-[18px] text-center text-darker">
                With Healthical, you can add a lot more achievements and milestones to your portfolio and impress more people with your resume. I can’t see you now, but i know we hit a spot with this one!

                </p>
               </div>
            </div>
         </div>

       <div className=' mt-20'>

         <Footer />
        </div> 
    </section>
  )
}

export default Benefits
