import React from 'react'

const TeacherPricing = () => {
  return (
    <div className="flex flex-col items-center p-6">
      <h2 className="text-2xl font-semibold">Simple, Transparent Pricing</h2>
      <p className="text-gray-600 mb-6">Choose the perfect learning plan for your needs</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* One-on-One Classes */}
        <div className="border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
          <h3 className="text-xl font-bold">One-on-One Classes</h3>
          <p className="text-3xl font-bold text-pink-600">₹800<span className="text-lg">/hour</span></p>
          <p className="text-gray-600 mb-4">Personalized attention and customized learning path</p>
          <ul className="text-gray-600 list-disc pl-5 mb-4">
            <li>Personalized attention</li>
            <li>Flexible scheduling</li>
            <li>Customized curriculum</li>
          </ul>
          <button className="bg-pink-600 text-white py-2 px-4 rounded-lg">Book Individual Class</button>
        </div>

        {/* Group Classes */}
        <div className="border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
          <h3 className="text-xl font-bold">Group Classes</h3>
          <p className="text-3xl font-bold text-pink-600">₹500<span className="text-lg">/hour</span></p>
          <p className="text-gray-600 mb-4">Interactive group learning experience</p>
          <ul className="text-gray-600 list-disc pl-5 mb-4">
            <li>Small group sizes</li>
            <li>Interactive discussions</li>
            <li>Peer learning benefits</li>
          </ul>
          <button className="bg-pink-600 text-white py-2 px-4 rounded-lg">Join Group Class</button>
        </div>
      </div>

      {/* Free Trial Section */}
      <div className="mt-8 p-6 bg-gray-100 rounded-xl text-center">
        <h3 className="text-xl font-semibold">Try a Free Trial Class</h3>
        <p className="text-gray-600 mb-4">Experience the teaching methodology and assess if it's the right fit for you</p>
        <button className="bg-black text-white py-2 px-4 rounded-lg">Schedule Free Trial</button>
      </div>
    </div>
  )
}

export default TeacherPricing
