import React from 'react'
import Dashboard from '../components/Tutdashboard'
import BatchManagement from '../components/BatchDetails'
import SessionCalendar from '../components/Tutsessions'
import Wallet from '../components/Wallet'

const TutorDashboard = () => {
  return (
    <div>
      <Dashboard/>
      <Wallet/>
      <SessionCalendar/>
      <BatchManagement/>
      

    </div>
  )
}

export default TutorDashboard
