import React , {useState} from 'react'
import logo from '../assets/logo.svg';
import doc from '../assets/rafiki.svg'
import HospitalSign from './HospitalSign';
import PatientSign from './PatientSign';
import HospitalLogin from './HospitalLogin';
import PatientLogin from './PatientLogin';

function LoginPage() {


    const [currentUsers, setCurrentUsers] = useState('sign');

    const handleClick = (userId, event) => {
      event.preventDefault(); // Prevent default form submission behavior
      setCurrentUsers(userId);
    };
  


  return (


    <div>
       <section className=' flex justify-center items-center'>
    <div className=' w-1/3 p-5'>
    <img src={logo} alt="" className='w-[100px] m-auto md:w-[100px] mt-3' />
      <h2 className="text-[32px] text-dark text-center">Healthical</h2>
      <img src={doc} alt="" />
    </div>

      <form className='m-auto justify-center items-center shadow-md   w-[570px]    border-2'>
         <h2 className="text-dark text-center text-[24px] p-1">Sign in</h2>
        <div className='flex justify-center items-center  mt-4  bg-gray-200 rounded-full w-[270px]  h-[45px] m-auto '>
          <button
            onClick={(e) => handleClick('sign', e)} // Pass event to handleClick function
            className={`w-[200px] border-[1px] h-[45px] rounded-full  focus:text-white   ${currentUsers === 'sign' ? 'bg-dark text-white opacity-100' : ''}`}
          >
         Patient 
          </button>
          <button
            onClick={(e) => handleClick('login', e)} // Pass event to handleClick function
            className={`w-[200px] border-[1px] h-[45px]  rounded-full  focus:text-white  ${currentUsers === 'login' ? 'bg-dark text-white opacity-100' : ''}`}
          >
          Hospital
          </button>
        </div>

        {currentUsers === 'sign' && (
        <div>
          
          <PatientLogin />
        </div>
      )}
      {currentUsers === 'login' && (
        <div>
          
          <HospitalLogin />
        </div>
      )}

      </form>

      
    </section>
    </div>
  )
}

export default LoginPage
