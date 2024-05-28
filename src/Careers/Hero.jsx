import React from 'react'
import Chatbot from '../components/Home/Chatbot'
import chat from '../components/assets/chat.png'
import { useState } from 'react';
function Hero() {

    const [showChatbot, setShowChatbot] = useState(false);

    const toggleChatbot = () => {
      setShowChatbot(!showChatbot);
    };


  return (
    <div>
        <h1 className=" text-[48px]  font-bold text-dark text-center p-10 h-[300px] mt-6">If you came all the way here  <br /> you definitely want to sit with us at lunch </h1>
   <section className='relative h-[450px] bg-abt-bg  p-8'>
    <div className='absolute inset-0 bg-black opacity-75'></div>
    <div className="absolute inset-0 flex justify-center items-center flex-col">
      <div className="relative z-10 w-[850px] mx-auto text-center">
        <p className="text-white text-[18px]  m-auto mt-60">
         Home / <span className=' text-gray-600'> CAREERS  </span>
        </p>
        <h1 className="text-[48px] text-white font-semibold mt-1">  Become A part of Healthical   </h1>

      </div>
      <div className="flex justify-end float-right ml-[1230px] mt-[180px] ">
        <img src={chat} alt="" className='w-[43px] h-[43px] fixed cursor-pointer' onClick={toggleChatbot} />
      </div>
      {showChatbot && (
        
         
    <Chatbot messages={[{ text: "Hello!", sender: "bot" }, { text: "How can I help you?", sender: "bot" }]}    className="fixed bottom-0 right-0 mb-8 mr-8 bg-white p-4 rounded-lg shadow-lg" />
        
      )}
    </div>
  </section>
  </div>


  )
}

export default Hero
