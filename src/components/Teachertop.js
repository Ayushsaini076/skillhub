import React from 'react'

const Teachertop = ({experience,name,skill,associated,about,fee}) => {
  return (
    <div className="bg-black text-white  p-6 mt-10  md:p-12">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start gap-8">
        
        {/* Left Section */}
        <div className="flex-1">
          {/* Tags */}
          <div className="flex gap-2 mb-4">
            {associated.map((tag, index) => (
              <span key={index} className="bg-green-500 text-white text-sm px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
            
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          {/* An experienced, dedicated, and passionate {skill} teacher with a deep love for teaching */}
          {about}
          </h1>

          {/* Description */}
          <p className="mt-4 text-gray-300">
          Learn {associated[0]},{associated[1]} and {associated[2]}  with structured lessons tailored to your skill level.
          </p>

          {/* Stats */}
          <div className="flex items-center gap-4 text-gray-400 mt-4">
            {/* <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-pink-600 rounded-full"></div> Response Time: 4h
            </span> */}
            <span>💰 ₹{fee}/hour</span>
            <span>👨‍🎓 50+ Students</span>
          </div>

          {/* CTA Button */}
          {/* <button className="mt-6 bg-green-500  hover:bg-white hover:text-green-500 font-medium py-2 px-6 rounded-full">
            Book Your Trial Class
          </button> */}
        </div>

        {/* Right Section */}
        <div className="bg-gray-900 p-6 rounded-xl w-full md:w-80">
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-green-500 text-sm">⭐ 5.0 (50+ reviews)</p>
          <div className="mt-4 bg-gray-800 p-4 rounded-lg">
            <p className="text-sm text-gray-300">
              <span className="text-green-500 font-semibold">✔ Ambassador</span><br />
              Over {experience} years of experience teaching beginners to advanced players, helping students master technique and performance.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Teachertop
