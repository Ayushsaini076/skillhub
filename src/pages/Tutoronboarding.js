import React from 'react'
import Navbar from '../components/Navbar'
import { HeroSection } from '../components/Heroonboard'
import OnboardingForm from '../components/Onboarding'
import AboutExperience from '../components/ExperienceSection'
import { ScheduleCalendar } from '../components/Calender'
import ProfileSection from '../components/ProfileSection'
import PricingAvailability from '../components/PriceSection'
import { FAQSection } from '../components/Tutfaq'
import Footer from '../components/Footer'


const Tutoronboarding = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <OnboardingForm/>
      <ProfileSection/>
      <AboutExperience/>
      <PricingAvailability/>
      <ScheduleCalendar/>
      <FAQSection/>
      <Footer/>
      {/* <Testimonials/> */}
    </div>
  )
}

export default Tutoronboarding
