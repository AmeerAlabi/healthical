import { useState } from 'react'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import './App.css'
import Form from './components/Forms/Form'
import LoginPage from './components/Forms/LoginPage'
import HospitalSign from './components/Forms/HospitalSign'
import HomePage from './components/Home/HomePage'
import AboutPage from './About/AboutPage'
import CareePage from './Careers/Career'

function App() {
  

  return (
    <>
       <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Form/>} />
       <Route path="/login" element={<LoginPage />} />
      <Route path="/Hospital-signup" element={<HospitalSign />} />
      <Route path="/Homepage" element={<HomePage  />} />
      <Route path="/Aboutpage" element={<AboutPage  />} />
      <Route path="/Careerpage" element={<CareePage  />} />
    </Routes>

   
  </BrowserRouter>
    </>
  )
}

export default App
