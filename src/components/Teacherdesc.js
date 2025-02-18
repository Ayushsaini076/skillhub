import React from 'react'

const Teacherdesc = () => {
  return (
    <div className="flex flex-col items-center bg-black text-white p-10">
      <h2 className="text-3xl font-bold">Meet Your Teacher</h2>
      <p className="text-gray-400 text-lg mt-2">Dedicated to Excellence in English Education</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 w-full max-w-5xl">
        <div className="bg-gray-900 p-6 rounded-2xl shadow-md text-center flex flex-col items-center">
          <div className="border-2 border-pink-500 rounded-full w-24 h-24 flex items-center justify-center text-pink-500">Teacher Profile</div>
          <h3 className="font-bold text-lg mt-4">Rekha</h3>
          <p className="text-yellow-400">⭐ 5.0 (50+ reviews)</p>
          <div className="mt-4 text-gray-400">
            <p><strong>Experience:</strong> 14+ Years</p>
            <p><strong>Students Taught:</strong> 50+</p>
            <p><strong>Response Time:</strong> 4 Hours</p>
          </div>
        </div>

        <div className="bg-gray-900 p-6 rounded-2xl shadow-md">
          <h3 className="font-bold text-lg">About Me</h3>
          <p className="text-gray-400 mt-2">
          I am a passionate guitarist with over a decade of experience teaching and performing. My lessons focus on technique, creativity, and confidence, helping students find their unique musical voice.
          </p>
          <h3 className="font-bold text-lg mt-4">Teaching Philosophy</h3>
          <p className="text-gray-400 mt-2">
          I believe learning guitar should be fun and structured. My approach blends theory with practical exercises, ensuring students develop skills while enjoying the process.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        <span className="bg-gray-800 text-pink-400 px-4 py-2 rounded-full">Electric & Acoustic Guitar</span>
        <span className="bg-gray-800 text-pink-400 px-4 py-2 rounded-full">Improvisation & Lead Guitar</span>
        <span className="bg-gray-800 text-pink-400 px-4 py-2 rounded-full">Fingerstyle & Classical Guitar</span>
        <span className="bg-gray-800 text-pink-400 px-4 py-2 rounded-full">Music Theory & Composition
        </span>
      </div>

      <button className="bg-pink-500 text-white px-6 py-3 rounded-full mt-6 hover:bg-pink-600">
        Schedule a Free Consultation
      </button>
    </div>
  )
}

export default Teacherdesc
