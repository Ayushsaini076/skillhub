import React from 'react'

const TutorCard = ({ name, role, description, rating, reviews, buttonColor }) => {
    return (
      <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
          <span className="text-gray-500 text-3xl">👤</span>
        </div>
        <h3 className="mt-4 text-xl font-semibold">{name}</h3>
        <p className={`text-${buttonColor}-500 font-medium`}>{role}</p>
        <p className="mt-2 text-gray-600 text-center">{description}</p>
        <div className="flex items-center mt-4">
          <span className="text-yellow-500 text-lg">⭐</span>
          <span className="ml-1 text-gray-800">{rating}</span>
          <span className="ml-2 text-gray-500">({reviews} reviews)</span>
        </div>
        <button
          className={`mt-4 bg-${buttonColor}-500 text-white py-2 px-4 rounded-lg hover:bg-${buttonColor}-600`}
        >
          Book Session
        </button>
      </div>
    );
};

const Teamsections = () => {
    const tutors = [
        {
          name: "Chef Sarah Wilson",
          role: "Professional Chef",
          description:
            "15+ years of culinary experience in Michelin-starred restaurants",
          rating: "4.9",
          reviews: "120",
          buttonColor: "green",
        },
        {
          name: "David Chen",
          role: "Music Composer",
          description: "Classical pianist with 20+ years of teaching experience",
          rating: "4.8",
          reviews: "95",
          buttonColor: "blue",
        },
        {
          name: "Mike Thompson",
          role: "Guitar Virtuoso",
          description: "Professional guitarist with touring experience",
          rating: "4.9",
          reviews: "150",
          buttonColor: "purple",
        },
    ];

  return (
    <div className="bg-gray-50 py-10">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Meet Our Expert Tutors</h2>
        <p className="mt-2 text-gray-600">
          Learn from passionate professionals with years of experience
        </p>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-6">
        {tutors.map((tutor, index) => (
          <TutorCard key={index} {...tutor} />
        ))}
      </div>
      <div className="text-center mt-6">
        <button className="bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-800">
          View All Tutors
        </button>
      </div>
    </div>
  )
}

export default Teamsections
