import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'
import { useEffect } from 'react';

const  Cardsection = () => {
    const base_url = process.env.BASE_URL
    const [tutors,setTutors]=useState([])

    useEffect(()=>{

      const fetchData = async()=>{
        const res = await axios.get(`${base_url}/api/v1/students/getallteacher`);
        console.log(res);
        setTutors(res.data)
      }

      fetchData();

    },[])

    console.log(tutors)
    // console.log(tutors[0].profilePhoto)
    // const allTeachers = await axios.get("http://localhost:8000/api/v1/students/getallteacher");
    
    // console.log(allTeachers);

    // const tutors = [
    //     {
    //       id: uuidv4(),
    //       name: "John Smith",
    //       price: "$35/hr",
    //       skills: ["Python", "Web Dev"],
    //       description:
    //         "Experienced software developer with 5+ years of teaching experience. Specializes in Python and web development.",
    //       rating: 4.9,
    //       reviews: 128,
    //     },
    //     {
    //       id: uuidv4(),
    //       name: "Sarah Johnson",
    //       price: "$40/hr",
    //       skills: ["UI/UX", "Design"],
    //       description:
    //         "Professional UI/UX designer with expertise in Figma and Adobe Creative Suite. 7 years of industry experience.",
    //       rating: 4.8,
    //       reviews: 95,
    //     },
    //     {
    //       id: uuidv4(),
    //       name: "Mike Williams",
    //       price: "$45/hr",
    //       skills: ["Data Science", "ML"],
    //       description:
    //         "Data scientist and machine learning expert. PhD in Computer Science with focus on AI applications.",
    //       rating: 5.0,
    //       reviews: 156,
    //     },
    // ];
    

  return (
    <div className="bg-gray-100 min-h-screen pt-4">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">Featured Tutors</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {tutors.length>0 && tutors.map((tutor, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md  max-w-sm w-full"
          >
            <div className="h-52 rounded-t-lg relative flex items-center justify-center">
              <button
                className="absolute top-3 right-3 bg-white rounded-full shadow p-2 hover:bg-gray-100"
                aria-label="Save Tutor"
              >
                ❤️
              </button>
              <img className="w-full h-full object-cover object-top" src={tutor.profilePhoto} alt="" />
              {/* {console.log(tutors.profilePhoto)} */}
            </div>
            <div className="mt-4 p-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{tutor.fullName}</h3>
                <span className="text-blue-600 font-semibold">{tutor.Fee}</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {tutor.associatedSkills && tutor.associatedSkills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 text-sm mt-4">{tutor.About}</p>
              <div className="flex items-center gap-1 text-yellow-500 mt-4">
                ⭐
                <span className="text-sm text-gray-700">
                  {tutor.rating} ({tutor.reviews} reviews)
                </span>
              </div>
              <Link to={`/tutors/${tutor._id}`}>
              <button className="bg-blue-600 text-white w-full py-2 mt-4 rounded-lg hover:bg-blue-700">
                Book Session
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Cardsection
