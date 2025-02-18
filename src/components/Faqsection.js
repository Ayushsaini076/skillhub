import React from 'react'
import { useState } from 'react';

const Faqsection = () => {
    const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { question: "How long are the tutoring sessions?", answer: "Each session is one hour long." },
    { question: "Can I change my tutor if I'm not satisfied?", answer: "Yes, you can request a tutor change anytime." },
    { question: "What is your cancellation policy?", answer: "You can cancel 24 hours before the session without any charges." },
    { question: "Do you offer group sessions?", answer: "Yes, we offer group sessions for up to 5 students." },
    { question: "What skill levels do you accommodate?", answer: "We accommodate all skill levels, from beginner to advanced." },
  ];

  return (
    <div className="bg-white py-10 px-6 sm:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 text-center mb-8">
          Find answers to common questions about our tutoring services
        </p>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-4"
            >
              <button
                className="flex justify-between items-center w-full text-left text-gray-700 text-lg font-medium focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <svg
                  className={`h-5 w-5 transform transition-transform ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <p className="mt-2 text-gray-600 text-sm">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faqsection
