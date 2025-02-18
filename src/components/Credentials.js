import React from 'react'

const Credentials = () => {
  return (
    <section className="py-12 bg-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-gray-900">Professional Credentials</h2>
        <p className="text-gray-500 mt-2">Experienced and Qualified to Deliver Excellence in Guitar Education</p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-pink-100 rounded-full mx-auto mb-4">
              <span className="text-pink-500 text-2xl">📁</span>
            </div>
            <h3 className="font-bold text-gray-800">Teaching Experience</h3>
            <p className="text-gray-600 mt-2">Over 10 years of experience teaching beginners to advanced players, helping students master technique, rhythm, and performance.</p>
          </div>
          
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-pink-100 rounded-full mx-auto mb-4">
              <span className="text-pink-500 text-2xl">💡</span>
            </div>
            <h3 className="font-bold text-gray-800">Core Specializations</h3>
            <ul className="text-gray-600 mt-2 text-left mx-auto w-fit">
              <li>&bull; Guitar Fundamentals & Finger Exercises</li>
              <li>&bull; Chords, Scales, and Improvisation</li>
              <li>&bull; Music Theory & Ear Training
              </li>
              <li>&bull; Songwriting & Composition</li>
            </ul>
          </div>
          
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-pink-100 rounded-full mx-auto mb-4">
              <span className="text-pink-500 text-2xl">🌍</span>
            </div>
            <h3 className="font-bold text-gray-800">Global Reach</h3>
            <p className="text-gray-600 mt-2">Teaching students from India, USA, UK, and Singapore, with expertise in both curriculum and non-curriculum content.</p>
          </div>
        </div>

        <div className="flex justify-center mt-10 gap-10 text-pink-500 font-bold text-2xl">
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
          <div className="text-center">
            <p>5-75</p>
            <p className="text-gray-600 text-sm">Student Age Range</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Credentials
