import React from 'react'
import Dashboard from '../components/Tutdashboard'
import BatchManagement from '../components/BatchDetails'
import SessionCalendar from '../components/Tutsessions'
import Wallet from '../components/Wallet'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const TutorDashboard = () => {
  const [tutor,setTutor]=useState({})
  const location = useLocation();
  const path = location.pathname;
  const id = path.split('/').pop();
  console.log(id);

  const base_url = process.env.BASE_URL

    useEffect(()=>{

      const fetchData = async()=>{
        const res = await axios.get(`${base_url}/api/v1/students/getallteacher/${id}`);
        console.log(res);
        setTutor(res.data.data)
      }

      fetchData();

    },[])

    console.log(tutor)
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
