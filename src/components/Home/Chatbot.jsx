import React, { useState } from 'react';

function Chatbot({ messages }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`fixed bottom-0 right-0 mr-4 mb-4 p-4 bg-white rounded-lg shadow-md max-w-sm ${isOpen ? '' : 'hidden'}`}>
      <div className="flex justify-between mb-2">
        <h3 className="text-lg font-semibold">Chatbot</h3>
        <button className="text-gray-500 hover:text-gray-700" onClick={toggleChatbot}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="chat-window max-h-96 overflow-y-auto">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender === 'bot' ? 'bg-dark text-white rounded-br-lg' : 'bg-gray-200 rounded-bl-lg'} p-2 mb-2 max-w-[80%]`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container mt-4 flex">
        <input type="text" placeholder="Type a message..." className="flex-1 rounded-full py-2 px-4 bg-gray-100 focus:outline-none" />
        <button className="bg-dark  text-white font-bold py-2 px-4 rounded-full">Send</button>
      </div>
    </div>
  );
}

export default Chatbot;
