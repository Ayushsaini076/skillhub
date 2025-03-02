import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { HeroSection } from '../components/Heroonboard'
import { FAQSection } from '../components/Tutfaq'
import Footer from '../components/Footer'


const Tutoronboarding = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <FAQSection/>
      <Footer/>
    </div>
  )
}

export default Tutoronboarding
