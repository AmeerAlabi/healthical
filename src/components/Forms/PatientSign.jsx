import React from 'react'
import { Link } from 'react-router-dom'

function PatientSign() {
  return (
    <div>
       <div className=' flex flex-col items-center justify-center gap-3 mt-5 '>
        <input type="text" className=' w-[480px] border-[1px] border-dimBlue h-[45px] rounded-lg m-auto p-1 ' placeholder='First Name' required />
        <input type="text" className=' w-[480px] border-[1px] border-dimBlue h-[45px] rounded-lg m-auto p-1 ' placeholder='Last Name ' required />
        <input type="number" className=' w-[480px] border-[1px] border-dimBlue h-[45px] rounded-lg m-auto p-1 ' placeholder='Mobile Number' required />
        <input type="text" className=' w-[480px] border-[1px] border-dimBlue h-[45px] rounded-lg m-auto p-1 '  placeholder='Email Address' required />
        <input type="password" className=' w-[480px]  border-[1px] border-dimBlue h-[45px] rounded-lg m-auto  p-1' placeholder='Password' required />
        <input type="password" className=' w-[480px] border-[1px] border-dimBlue h-[45px] rounded-lg m-auto p-1'  placeholder='Confirm Password' required />
      </div>
      <div className=' p-4 ml-7 '>
      <button className=' bg-dark text-white w-[125px]  h-[40px] rounded-lg '><Link to="/Homepage">Register</Link></button>

      <div>
        <p className="  mt-4 ">Already have an account?  <Link to="/login" className='text-dark'>Sign in </Link> </p>
       </div>
      </div>

    </div>
  )
}

export default PatientSign
