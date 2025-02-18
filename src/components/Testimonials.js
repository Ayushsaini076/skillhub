import React from 'react'
const testimonials = [
    {
      name: "Emily Parker",
      role: "Cooking Student",
      feedback:
        "The cooking classes exceeded my expectations. Chef Sarah's attention to detail and patient teaching style helped me master techniques I struggled with for years.",
      rating: 5,
    },
    {
      name: "James Rodriguez",
      role: "Guitar Student",
      feedback:
        "I went from knowing nothing about guitar to playing my favorite songs in just a few months. Mike is an incredible instructor who makes learning fun.",
      rating: 5,
    },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Student Success Stories</h2>
        <p className="text-center text-gray-400 mb-8">
          Hear from our happy students about their learning journey
        </p>
        <div className="space-y-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col"
            >
              <div className="flex items-center mb-4">
                <div className="bg-gray-700 w-12 h-12 rounded-full flex justify-center items-center mr-4">
                  <span className="text-gray-400 text-lg font-bold">👤
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-green-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{testimonial.feedback}</p>
              <div className="flex">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
