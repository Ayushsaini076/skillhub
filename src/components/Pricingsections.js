import React from 'react'

const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for beginners",
      price: "$29",
      duration: "/session",
      features: ["1-hour session", "Basic skill assessment", "Practice materials"],
      buttonColor: "bg-black text-white",
    },
    {
      name: "Pro",
      description: "Most popular choice",
      price: "$79",
      duration: "/3 sessions",
      features: [
        "3 one-hour sessions",
        "Personalized learning plan",
        "Progress tracking",
        "Advanced materials",
      ],
      buttonColor: "bg-green-500 text-white",
    },
    {
      name: "Premium",
      description: "For serious learners",
      price: "$199",
      duration: "/10 sessions",
      features: [
        "10 one-hour sessions",
        "Priority scheduling",
        "Custom curriculum",
        "24/7 support",
      ],
      buttonColor: "bg-black text-white",
    },
];

const Pricingsections = () => {
  return (
    <section className="bg-white py-12">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
      <p className="text-gray-600 mb-8">
        Choose the perfect plan for your learning journey
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 shadow-lg flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-gray-500 mb-4">{plan.description}</p>
              <div className="text-4xl font-bold mb-4">
                {plan.price}
                <span className="text-xl font-normal text-gray-500">
                  {plan.duration}
                </span>
              </div>
              <ul className="text-gray-600 mb-6 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-green-500 mr-2">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <button
              className={`py-2 px-4 rounded ${plan.buttonColor} hover:opacity-90`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Pricingsections
