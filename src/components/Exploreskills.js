import React from 'react'

const Exploreskills = () => {
    const skills = [
        {
          title: 'Cooking Classes',
          description: 'Learn culinary arts from professional chefs. Master kitchen techniques and create delicious dishes.',
          tutors: '20+ Expert Tutors',
          bgColor: 'bg-green-500',
          icon: '📖', // Replace with an actual icon
        },
        {
          title: 'Music Lessons',
          description: 'From piano to vocals, learn music theory and performance from experienced musicians.',
          tutors: '15+ Expert Tutors',
          bgColor: 'bg-blue-500',
          icon: '🎵', // Replace with an actual icon
        },
        {
          title: 'Guitar Training',
          description: 'Master acoustic or electric guitar with personalized lessons for all skill levels.',
          tutors: '12+ Expert Tutors',
          bgColor: 'bg-purple-500',
          icon: '🎸', // Replace with an actual icon
        },
    ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">Explore Featured Skills</h2>
        <p className="text-gray-600 mt-2">
          Discover a wide range of skills taught by expert tutors
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className={`h-20 flex items-center justify-center ${skill.bgColor} text-white text-4xl`}>
                {skill.icon}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{skill.title}</h3>
                <p className="text-gray-600 mt-2">{skill.description}</p>
                <p className="text-green-500 font-medium mt-4">{skill.tutors}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-6 px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors">
          View All Skills
        </button>
      </div>
    </section>
  )
}

export default Exploreskills
