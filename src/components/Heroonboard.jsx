import { Link } from "react-router-dom";

export function HeroSection() {
    return (
      <section id="hero" className="bg-neutral-900 text-white min-h-[70vh] flex items-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                Welcome to HobbiGo
              </h1>
              <p className="text-xl md:text-2xl text-neutral-300 mb-8">Share Your Passion, Inspire Others</p>
              <p className="text-neutral-400 mb-8">Join our community of passionate tutors and make a difference in someone's learning journey.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link to='/tutorauth'>
                <button className="px-8 py-3 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full text-white font-semibold hover:opacity-90 transition-all transform hover:scale-105">
                  Start Teaching
                </button>
                </Link>
                <a href="#about_experience" className="px-8 py-3 border-2 border-emerald-400 rounded-full text-white font-semibold hover:bg-orange-500/10 transition-all">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  