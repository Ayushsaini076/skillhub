import React from 'react'
import { CircleUserRound } from 'lucide-react';
import { Link , useNavigate, useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = ()=>{
    if(location.pathname.includes("onboarding")){
      navigate(`/tutordash/${uuidv4()}`);
    }
    else{
      navigate(`/students/${uuidv4()}`);
    }
  }
  return (
    <nav className="fixed w-full z-50 top-0 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <a href="#" className="text-2xl font-bold">HobbiGo</a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <a href="#featured-skills" className="hover:text-emerald-400 transition-colors">Skills</a>
                <a href="#how-it-works" className="hover:text-emerald-400 transition-colors">How It Works</a>
                <a href="#tutor-showcase" className="hover:text-emerald-400 transition-colors">Tutors</a>
                <a href="#pricing-plans" className="hover:text-emerald-400 transition-colors">Pricing</a>
                <a href="#booking-process" className="hover:text-emerald-400 transition-colors">Book Now</a>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">FAQ</a>
              </div>
            </div>
            {/* <Link to={`/students/${uuidv4()}`}> */}
              {/* <div className='cursor-pointer' onClick={handleClick}>
                <CircleUserRound/>
              </div> */}
            {/* </Link> */}
            <div className="flex md:hidden">
              <button id="hamburger" className="inline-flex items-center justify-center p-2 rounded-md hover:bg-neutral-700 focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
  )
}


export default Navbar

