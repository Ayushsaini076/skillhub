import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Thompson",
      role: "Music Teacher",
      content: "Teaching on this platform has been incredible. The onboarding process was smooth, and I've connected with amazing students who share my passion for music.",
      initials: "S",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Art Instructor",
      content: "The flexible scheduling and pricing options have helped me grow my student base. I love how easy it is to manage my teaching schedule.",
      initials: "M",
    },
    {
      id: 3,
      name: "Rachel Martinez",
      role: "Language Tutor",
      content: "The platform's user-friendly interface and professional tools have helped me create an engaging learning environment for my students.",
      initials: "R",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-800 mb-4">What Our Tutors Say</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Join our growing community of passionate educators who are making a difference
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-xl shadow-lg border border-neutral-200 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl">
                  {testimonial.initials}
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-neutral-800">{testimonial.name}</h3>
                  <p className="text-sm text-neutral-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-neutral-600 mb-4">{testimonial.content}</p>
              <div className="flex text-orange-500">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;