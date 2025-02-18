import React from 'react';

const Calendar = () => {
  return (
    <section id="calendar" className="pt-24 px-4 sm:px-6 lg:px-8">
      {/* Calendar Header */}
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-900">Session Calendar</h2>
          <div className="flex space-x-4">
            <div className="flex bg-white rounded-lg border border-gray-200">
              <button className="px-4 py-2 text-sm font-medium text-blue-600 border-r border-gray-200">Weekly</button>
              <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">Monthly</button>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Schedule Session
            </button>
          </div>
        </div>
      </div>

      {/* Calendar Navigation */}
      <div className="bg-white rounded-lg border border-gray-200 mb-6">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          <h3 className="text-lg font-semibold">September 18 - 24, 2023</h3>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-px bg-gray-200">
          {/* Time Column */}
          <div className="bg-gray-50 p-2 text-xs font-medium text-gray-500 uppercase">Time</div>
          {/* Days Headers */}
          {['Mon 18', 'Tue 19', 'Wed 20', 'Thu 21', 'Fri 22', 'Sat 23'].map((day) => (
            <div key={day} className="bg-gray-50 p-2 text-xs font-medium text-gray-500 uppercase text-center">{day}</div>
          ))}
        </div>

        {/* Calendar Content */}
        <div className="grid grid-cols-7 gap-px bg-gray-200">
          {/* Time Slots */}
          {['9:00 AM', '10:00 AM', '11:00 AM'].map((time) => (
            <React.Fragment key={time}>
              <div className="bg-white p-2 text-xs text-gray-500">{time}</div>
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-white p-2 min-h-[100px]">
                  {/* Session content would go here */}
                  {index === 1 && time === '9:00 AM' && (
                    <div className="bg-blue-100 p-2 rounded-lg text-xs">
                      <div className="font-medium text-blue-800">JavaScript Basics</div>
                      <div className="text-blue-600 mt-1">9:00 - 10:00</div>
                      <div className="flex items-center mt-1">
                        <img src="https://avatar.iran.liara.run/public" className="w-4 h-4 rounded-full" alt="Teacher" />
                        <span className="ml-1 text-blue-600">John Doe</span>
                      </div>
                      <button className="mt-2 w-full bg-blue-600 text-white px-2 py-1 rounded text-xs">Join</button>
                    </div>
                  )}
                  {index === 2 && time === '10:00 AM' && (
                    <div className="bg-green-100 p-2 rounded-lg text-xs">
                      <div className="font-medium text-green-800">Python Group Session</div>
                      <div className="text-green-600 mt-1">10:00 - 11:00</div>
                      <div className="flex items-center mt-1">
                        <img src="https://avatar.iran.liara.run/public" className="w-4 h-4 rounded-full" alt="Teacher" />
                        <span className="ml-1 text-green-600">Sarah Smith</span>
                      </div>
                      <button className="mt-2 w-full bg-green-600 text-white px-2 py-1 rounded text-xs">Join</button>
                    </div>
                  )}
                  {index === 3 && time === '11:00 AM' && (
                    <div className="bg-blue-100 p-2 rounded-lg text-xs">
                      <div className="font-medium text-blue-800">React Advanced</div>
                      <div className="text-blue-600 mt-1">11:00 - 12:00</div>
                      <div className="flex items-center mt-1">
                        <img src="https://avatar.iran.liara.run/public" className="w-4 h-4 rounded-full" alt="Teacher" />
                        <span className="ml-1 text-blue-600">Mike Johnson</span>
                      </div>
                      <button className="mt-2 w-full bg-blue-600 text-white px-2 py-1 rounded text-xs">Join</button>
                    </div>
                  )}
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center space-x-4 text-sm">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-blue-100 rounded mr-2"></div>
          <span className="text-gray-600">One-to-One Session</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-green-100 rounded mr-2"></div>
          <span className="text-gray-600">Group Session</span>
        </div>
      </div>
    </section>
  );
};

export default Calendar;
