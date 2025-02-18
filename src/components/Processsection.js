import React from 'react'

const Processsection = () => {
    const steps = [
        {
          id: 1,
          title: 'Choose Skill',
          description: 'Browse through our wide range of available skills and select what you want to learn',
          icon: '🔍', // Replace with an icon from a library if needed
        },
        {
          id: 2,
          title: 'Pick Tutor',
          description: 'Select from our verified expert tutors based on reviews and expertise',
          icon: '👥', // Replace with an icon from a library if needed
        },
        {
          id: 3,
          title: 'Schedule',
          description: 'Book your preferred time slot that works best for your schedule',
          icon: '📅', // Replace with an icon from a library if needed
        },
        {
          id: 4,
          title: 'Start Learning',
          description: 'Begin your learning journey with personalized one-on-one sessions',
          icon: '▶️', // Replace with an icon from a library if needed
        },
    ];
    
  return (
    <section className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">How It Works</h2>
        <p className="text-gray-400 mt-2">Find your perfect tutor in just a few simple steps</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-gray-800 rounded-lg p-6 text-left shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="h-8 w-8 flex items-center justify-center bg-green-500 text-white rounded-full text-sm font-semibold">
                  {step.id}
                </div>
                <div className="text-green-500 ml-4 text-2xl">{step.icon}</div>
              </div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-gray-400 mt-2">{step.description}</p>
            </div>
          ))}
        </div>
        <button className="mt-8 px-6 py-3 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition-colors">
          Get Started Now →
        </button>
      </div>
    </section>
  )
}

export default Processsection
