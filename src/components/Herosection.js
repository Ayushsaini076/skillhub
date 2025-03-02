import React from 'react'
import { Link } from 'react-router-dom'


const Herosection = () => {
  return (
    <section id="hero" className="bg-neutral-900 text-white pt-16 min-h-[70vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
                Master New Skills with Expert Tutors
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Connect with passionate tutors in cooking, music, guitar, and more. Learn at your own pace with personalized one-on-one sessions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/signup">
                  <button className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-500 hover:bg-emerald-600 transition-colors">
                    Find Your Tutor
                  </button>
                </Link>
                
                <Link to="/onboarding">
                  <button className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-white hover:bg-neutral-800 transition-colors">
                    Become a Tutor
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-lg blur opacity-30"></div>
              {/* <div className="relative bg-neutral-800 p-8 rounded-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-neutral-700 p-4 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-emerald-400">100+</h3>
                    <p className="text-gray-300">Expert Tutors</p>
                  </div>
                  <div className="bg-neutral-700 p-4 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-emerald-400">20+</h3>
                    <p className="text-gray-300">Skills</p>
                  </div>
                  <div className="bg-neutral-700 p-4 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-emerald-400">1000+</h3>
                    <p className="text-gray-300">Students</p>
                  </div>
                  <div className="bg-neutral-700 p-4 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-emerald-400">4.9</h3>
                    <p className="text-gray-300">Rating</p>
                  </div>
                </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>
  )
}

export default Herosection
