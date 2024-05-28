import React from 'react'
import { Link } from 'react-router-dom'

function PatientLogin() {
  return (
    <div>
    <div>
    <div className=' flex flex-col items-center justify-center gap-3 mt-5 '>
      <input type="text" className=' w-[480px] border-[1px] border-dimBlue h-[45px] rounded-lg m-auto p-1 ' placeholder='Email Adress' required />
      <input type="password" className=' w-[480px] border-[1px] border-dimBlue h-[45px] rounded-lg m-auto p-1 ' placeholder='Password' required />
      
    </div>
    <Link to="/" className=" text-right text-gray-500 p-3 flex justify-end  ">Forgot Password?</Link>
     </div>
    <div className=' p-4 ml-7 '>
    <button className=' bg-dark text-white w-[125px]  h-[40px] rounded-lg '> <Link to="/Homepage">Login </Link> </button>
     <div>
      <p className="  mt-4 ">Don't  have an account?  <Link to="/" className='text-dark'>Sign Up </Link> </p>
     </div>


    </div>

  </div>
  )
}

export default PatientLogin
