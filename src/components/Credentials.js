import React from 'react'

const Credentials = ({experience,skill,associated}) => {
  return (
    <section className="py-12 bg-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-gray-900">Professional Credentials</h2>
        <p className="text-gray-500 mt-2">Experienced and Qualified to Deliver Excellence in {skill} Education</p>

        <div className="grid sm:grid-cols-2  mt-8 ml-[15rem]">
          <div className="bg-white shadow-lg p-6 h-[30vh] w-[20vw] rounded-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mx-auto mb-10">
              <span className="text-blue-500 text-2xl">📁</span>
            </div>
            <h3 className="font-bold text-gray-800">Teaching Experience</h3>
            <p className="text-gray-600 mt-2">Over {experience} years of experience teaching beginners to advanced players, helping students master technique and performance.</p>
          </div>
          
          <div className="bg-white shadow-lg p-6 h-[30vh] w-[20vw] rounded-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mx-auto mb-8">
              <span className="text-blue-500 text-2xl">💡</span>
            </div>
            <h3 className="font-bold text-gray-800">Core Specializations</h3>
            <ul className="text-gray-600 mt-2 text-left mx-auto w-fit">
              {associated.map((skill)=>(
                <li>&bull;{skill}</li>
              ))}
            </ul>
          </div>
          
          {/* <div className="bg-white shadow-lg p-6 rounded-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mx-auto mb-4">
              <span className="text-blue-500 text-2xl">🌍</span>
            </div>
            <h3 className="font-bold text-gray-800">Global Reach</h3>
            <p className="text-gray-600 mt-2">Teaching students from India, USA, UK, and Singapore, with expertise in both curriculum and non-curriculum content.</p>
          </div> */}
        </div>

        <div className="flex justify-center mt-10 gap-10 text-blue-500 font-bold text-2xl">
          <div className="text-center">
            <p>50+</p>
            <p className="text-gray-600 text-sm">Active Students</p>
          </div>
          <div className="text-center">
            <p>5.0</p>
            <p className="text-gray-600 text-sm">Average Rating</p>
          </div>
          <div className="text-center">
            <p>4h</p>
            <p className="text-gray-600 text-sm">Response Time</p>
          </div>
          {/* <div className="text-center">
            <p>5-75</p>
            <p className="text-gray-600 text-sm">Student Age Range</p>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Credentials
