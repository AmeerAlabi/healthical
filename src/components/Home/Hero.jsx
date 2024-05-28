import React, { useState } from 'react';
import chat from '../assets/chat.png';
import Chatbot from './Chatbot';

function Hero() {
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <section className='relative h-[475px] bg-hero-bg'>
      <div className='absolute inset-0 bg-black opacity-75'></div>
      <div className="absolute inset-0 flex justify-center items-center flex-col">
        <div className="relative z-10 w-[850px] mx-auto text-center">
          <h1 className="text-[48px] text-white font-bold">Your Health, our <span className='text-dark'>Priority</span></h1>
          <p className="text-white text-[18px] mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quas accusamus hic sunt! Eius, nesciunt nemo magni delectus esse libero velit ipsum perferendis vitae, corporis itaque corrupti a maiores voluptatum, eveniet minima eos? Quae id omnis accusantium vel obcaecati fugiat.
          </p>
          <button className='text-white w-[125px] p-2 bg-dark mt-8 rounded-lg'>Learn More</button>
        </div>
        <div className="flex justify-end float-right ml-[1200px] mt-[50px] ">
          <img src={chat} alt="" className='w-[43px] h-[43px] fixed cursor-pointer' onClick={toggleChatbot} />
        </div>
        {showChatbot && (
          
           
      <Chatbot messages={[{ text: "Hello!", sender: "bot" }, { text: "How can I help you?", sender: "bot" }]}    className="fixed bottom-0 right-0 mb-8 mr-8 bg-white p-4 rounded-lg shadow-lg" />
          
        )}
      </div>
    </section>
  );
}

export default Hero;
