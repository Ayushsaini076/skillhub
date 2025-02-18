import React from 'react'

const Searchsection = () => {
  return (
    <div className="flex flex-col items-center pt-[2rem] h-[40vh] bg-gray-100">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Find Your Ideal Tutor</h1>
        <p className="text-gray-600">Search by skill, expertise level, or availability</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-3xl">
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <input
            type="text"
            placeholder="Search skills (e.g., Programming, Design, Music)"
            className="w-full lg:flex-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <select
            className="w-full lg:w-auto p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option>Experience Level</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
          <select
            className="w-full lg:w-auto p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option>Availability</option>
            <option>Weekdays</option>
            <option>Weekends</option>
            <option>Anytime</option>
          </select>
          <select
            className="w-full lg:w-auto p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option>Price Range</option>
            <option>$0 - $50</option>
            <option>$50 - $100</option>
            <option>$100+</option>
          </select>
          <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800">
            Search
          </button>
        </div>
        <div className="mt-6">
          <p className="text-gray-600 mb-2">Popular searches:</p>
          <div className="flex flex-wrap gap-2">
            {["Programming", "Web Design", "Digital Marketing", "Language Learning", "Music"].map((tag) => (
              <span
                key={tag}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm cursor-pointer hover:bg-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>

  )
}

export default Searchsection
