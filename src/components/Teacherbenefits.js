import React from 'react'
// import { FaUserFriends, FaClock, FaBookOpen, FaBuilding, FaGlobe, FaUsers } from "react-icons/fa";

const features = [
    {
    //   icon: <FaUserFriends className="text-pink-500 text-4xl mb-4" />,
      title: "Personalized Attention",
      description: "Individual focus on your learning needs with customized teaching approaches and regular feedback.",
    },
    {
    //   icon: <FaClock className="text-pink-500 text-4xl mb-4" />,
      title: "Flexible Scheduling",
      description: "Learn at your own pace with convenient timing options that fit your schedule.",
    },
    {
    //   icon: <FaBookOpen className="text-pink-500 text-4xl mb-4" />,
      title: "Complete Coverage",
      description: "Comprehensive curriculum covering reading, writing, speaking, and grammar.",
    },
    {
    //   icon: <FaBuilding className="text-pink-500 text-4xl mb-4" />,
      title: "14+ Years Experience",
      description: "Benefit from years of teaching expertise and proven teaching methodologies.",
    },
    {
    //   icon: <FaGlobe className="text-pink-500 text-4xl mb-4" />,
      title: "Global Reach",
      description: "Teaching students from India, USA, UK, and Singapore with diverse learning needs.",
    },
    {
    //   icon: <FaUsers className="text-pink-500 text-4xl mb-4" />,
      title: "All Age Groups",
      description: "Specialized teaching methods for students aged 5 to 75 years.",
    },
];

const Teacherbenefits = () => {
  return (
    <div className="bg-black text-white py-16 px-8 text-center">
    <h2 className="text-3xl font-bold">Why Choose My Classes?</h2>
    <p className="text-gray-400 mt-2">Discover the unique advantages of learning with an experienced educator</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      {features.map((feature, index) => (
        <div key={index} className="bg-gray-900 p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
          {/* {feature.icon} */}
          <h3 className="text-lg font-semibold">{feature.title}</h3>
          <p className="text-gray-400 mt-2">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Teacherbenefits
