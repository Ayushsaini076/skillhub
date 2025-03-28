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
import { useLocation } from 'react-router-dom'
import { useState,useEffect } from 'react'
import Tutorvideo from '../components/Tutorvideo'
import axios from 'axios'

const Tutorpage = () => {
  const server_url = process.env.SERVER_URL
  const [tutor,setTutor]=useState({})
  const location = useLocation();
  const path = location.pathname;
  const id = path.split('/').pop();
  console.log(id);

    useEffect(()=>{

      const fetchData = async()=>{
        const res = await axios.get(`${server_url}/api/v1/students/getallteacher/${id}`);
        console.log(res);
        setTutor(res.data.data)
      }

      fetchData();

    },[])

    console.log(tutor)
  return (
    <div>
      {(tutor && Object.keys(tutor).length>0) ? <div>
      <Navbar/>
      <Teachertop 
      name = {tutor.fullName}
      skill = {tutor.subject}
      associated = {tutor.associatedSkills}
      about = {tutor.About}
      fee = {tutor.Fee}
      experience = {tutor.experience}

      />
      <Credentials 
      associated={tutor.associatedSkills}
      skill={tutor.subject}
      experience = {tutor.experience}/>
      <Tutorvideo link={tutor.videoFile}/>
      <Classdesc
      skill = {tutor.subject}
      aboutclass = {tutor.AboutClass}
      associated={tutor.associatedSkills}/>
      {/* <Teacherdesc/> */}
      <TeacherPricing 
      
      fee = {tutor.Fee}/>
      {/* <Teacherbenefits/> */}
      <Teacherreview/>
      <Footer/>
    </div>:<p>Loading...</p>}
    </div>
  )
}

export default Tutorpage
