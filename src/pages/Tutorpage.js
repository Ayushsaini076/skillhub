import React from 'react'
import Teachertop from '../components/Teachertop'
import Credentials from '../components/Credentials'
import Classdesc from '../components/Classdesc'
import Teacherdesc from '../components/Teacherdesc'
import TeacherPricing from '../components/TeacherPricing'
import Navbar from '../components/Navbar'
import Teacherbenefits from '../components/Teacherbenefits'
import Teacherreview from '../components/Teacherreview'
import Footer from '../components/Footer'

const Tutorpage = () => {
  return (
    <div>
      <Navbar/>
      <Teachertop/>
      <Credentials/>
      <Classdesc/>
      <Teacherdesc/>
      <TeacherPricing/>
      <Teacherbenefits/>
      <Teacherreview/>
      <Footer/>
    </div>
  )
}

export default Tutorpage
