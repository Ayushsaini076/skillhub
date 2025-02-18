import React from 'react'
// import { FaStar } from "react-icons/fa";


const reviews = [
    {
      name: "Lucia Mathis",
      initial: "L",
      rating: 5.0,
      review: "Perfect! Perfect! Very patient and knowledgeable tutor. Highly recommended! Thank you Rekha.",
    },
    {
      name: "Nalin",
      initial: "N",
      rating: 5.0,
      review: "Perfect! Rekha ma'am has been very right in terms of giving the teaching as per the need of student. I immensely benefitted from her guidance. Thanks Rekha ma'am.",
    },
];

const Teacherreview = () => {
  return (
    <div className="bg-white text-black py-16 px-8 text-center">
      <h2 className="text-3xl font-bold">Student Reviews</h2>
      <p className="text-gray-500 mt-2">See what my students have to say about their learning experience</p>

      <div className="mt-8 bg-gray-100 rounded-lg p-6 inline-block">
        <h3 className="text-4xl font-bold">5.0</h3>
        <div className="flex justify-center mt-2">
          {/* {[...Array(5)].map((_, index) => (
            <FaStar key={index} className="text-yellow-400 text-xl" />
          ))} */}
        </div>
        <p className="text-gray-500 mt-1">Based on 50+ reviews</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white shadow-lg rounded-xl p-6 text-left">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-500 text-white font-bold text-lg">
                {review.initial}
              </div>
              <div>
                <h3 className="font-semibold">{review.name}</h3>
                <div className="flex items-center">
                  {/* <FaStar className="text-yellow-400 text-sm" /> */}
                  <span className="ml-1 text-sm font-medium">{review.rating}</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 mt-3">{review.review}</p>
          </div>
        ))}
      </div>

      <button className="mt-6 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
        View All Reviews
      </button>
    </div>
  )
}

export default Teacherreview
