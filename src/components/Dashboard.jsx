import React from 'react';
import Sessions from './SessionDetails';
import Calendar from './Usercalendar';
import Settings from './ProfileSetting';

const EduDash = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Sidebar Navigation */}
      <nav className="bg-white fixed w-64 h-screen hidden lg:block">
        <div className="p-4 border-b border-gray-200">
          <div className="text-2xl font-bold text-blue-600">EduDash</div>
        </div>
        <div className="py-4">
          <a href="#overview" className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-500 hover:text-white transition-colors">
            <span className="mx-4">Overview</span>
          </a>
          <a href="#sessions" className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-500 hover:text-white transition-colors">
            <span className="mx-4">Sessions</span>
          </a>
          <a href="#calendar" className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-500 hover:text-white transition-colors">
            <span className="mx-4">Calendar</span>
          </a>
          <a href="#membership" className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-500 hover:text-white transition-colors">
            <span className="mx-4">Membership</span>
          </a>
          <a href="#wallet" className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-500 hover:text-white transition-colors">
            <span className="mx-4">Wallet</span>
          </a>
          <a href="#rewards" className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-500 hover:text-white transition-colors">
            <span className="mx-4">Rewards</span>
          </a>
        </div>
        <div className="absolute bottom-0 w-full border-t border-gray-200">
          <div className="p-4">
            <div className="flex items-center">
              <img src="https://avatar.iran.liara.run/public" alt="User" className="w-10 h-10 rounded-full" />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">user@example.com</p>
                <p className="text-xs text-gray-500">Student</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="lg:ml-64 min-h-screen">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 fixed top-0 right-0 left-0 lg:left-64 z-30">
          <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex-1 flex items-center">
              <input type="search" placeholder="Search..." className="w-full max-w-xs px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" />
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-500 hover:text-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                </svg>
              </button>
              <button className="flex items-center space-x-2">
                <img src="https://avatar.iran.liara.run/public" alt="Profile" className="w-8 h-8 rounded-full" />
              </button>
            </div>
          </div>
        </header>

        {/* Overview Section */}
        <section id="overview" className="pt-24 px-4 sm:px-6 lg:px-8">
          {/* Welcome Banner */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">Welcome back, John!</h1>
                <p className="text-gray-600 mt-1">Let's continue your learning journey</p>
              </div>
              <div className="text-right">
                <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">Active Member</span>
              </div>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {/* Sessions Stats */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sessions</h3>
              <div className="flex items-center">
                <div className="text-3xl font-bold text-blue-600">24</div>
                <div className="ml-2 text-sm text-gray-500">This month</div>
              </div>
            </div>

            {/* Wallet Balance */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Wallet Balance</h3>
              <div className="flex items-center">
                <div className="text-3xl font-bold text-green-600">$250</div>
                <div className="ml-2 text-sm text-gray-500">Available</div>
              </div>
            </div>

            {/* Upcoming Sessions */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Upcoming Sessions</h3>
              <div className="flex items-center">
                <div className="text-3xl font-bold text-purple-600">3</div>
                <div className="ml-2 text-sm text-gray-500">This week</div>
              </div>
            </div>

            {/* Membership Status */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Membership</h3>
              <div className="flex items-center">
                <div className="text-3xl font-bold text-yellow-600">Gold</div>
                <div className="ml-2 text-sm text-gray-500">Valid till 2024</div>
              </div>
            </div>
          </div>

          {/* Recent Activity & Next Session */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Recent Activity */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Completed Python Basics Course</p>
                    <p className="text-xs text-gray-500">2 days ago</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Earned "Quick Learner" Badge</p>
                    <p className="text-xs text-gray-500">1 week ago</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Attended Web Development Workshop</p>
                    <p className="text-xs text-gray-500">2 weeks ago</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Next Session */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Next Session</h3>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-md font-medium text-blue-800">Advanced JavaScript Concepts</h4>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Today</span>
                </div>
                <p className="text-sm text-blue-600 mb-2">4:00 PM - 5:30 PM</p>
                <div className="flex items-center text-sm text-blue-500">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  Instructor: Sarah Johnson
                </div>
              </div>
              <button className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                Join Session
              </button>
            </div>
          </div>

          {/* Motivational Quote */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">Quote of the Day</h3>
            <p className="text-lg italic">"The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice."</p>
            <p className="text-sm mt-2">- Brian Herbert</p>
          </div>
        </section>

        <Sessions/>
        <Calendar/>
        <Settings/>
      </main>
    </div>
  );
};

export default EduDash;
