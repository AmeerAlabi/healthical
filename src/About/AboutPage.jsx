import React from 'react'
import Navbar from '../components/Home/Navbar'
import Hero from './Hero'
import Mission from './Mission'
import Who from './Who'
import Footer from '../components/Home/Footer'

function AboutPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Mission />
      <Who />
     <div className=' mt-24'>
     <Footer  />
        </div> 
    </div>
  )
}

export default AboutPage
