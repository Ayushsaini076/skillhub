import { useState } from "react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "How do I get started as a tutor?", answer: "Simply complete the onboarding process by filling out your profile information, setting your availability, and defining your pricing. Once approved, you can start accepting students!" },
    { question: "How do payments work?", answer: "We handle all payments securely through our platform. You'll receive payments weekly for all completed sessions, minus our service fee." },
    { question: "Can I set my own schedule?", answer: "Yes! You have complete control over your availability. You can set your preferred teaching hours and update them anytime through your dashboard." },
    { question: "What qualifications do I need?", answer: "While formal qualifications are welcome, we value expertise and passion in your subject area. You'll need to demonstrate your teaching ability through a demo video." },
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-neutral-600">Everything you need to know about becoming a tutor</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-neutral-200 rounded-lg">
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-neutral-50 transition-colors rounded-lg focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-neutral-800">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-neutral-500 transform transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-neutral-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
