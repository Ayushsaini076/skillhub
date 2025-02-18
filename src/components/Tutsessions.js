import React from "react";

const sessions = [
  { day: "Mon", time: "10:00 AM", title: "Guitar Basics - A", students: 8, color: "bg-blue-100" },
  { day: "Tue", time: "2:00 PM", title: "Advanced - B", students: 6, color: "bg-green-100" },
  { day: "Wed", time: "10:00 AM", title: "Guitar Basics - A", students: 8, color: "bg-blue-100" },
  { day: "Thu", time: "2:00 PM", title: "Advanced - B", students: 6, color: "bg-green-100" },
  { day: "Thu", time: "5:00 PM", title: "One-on-One", students: 1, color: "bg-purple-100" },
  { day: "Fri", time: "10:00 AM", title: "Guitar Basics - A", students: 8, color: "bg-blue-100" },
];

const upcomingSessions = [
  { title: "Guitar Basics - Batch A", time: "Today, 10:00 AM - 11:00 AM", statusColor: "text-blue-500" },
  { title: "Advanced Guitar - Batch B", time: "Tomorrow, 2:00 PM - 3:30 PM", statusColor: "text-green-500" },
];

const SessionCalendar = () => {
  const days = ["Mon, 11", "Tue, 12", "Wed, 13", "Thu, 14", "Fri, 15", "Sat, 16", "Sun, 17"];
  const times = ["10:00 AM", "2:00 PM", "5:00 PM"];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Session Calendar</h1>
        <div className="flex items-center gap-4">
          <button className="bg-black text-white px-4 py-2 rounded-md">Schedule Session</button>
          <select className="border border-gray-300 px-4 py-2 rounded-md">
            <option>March 2024</option>
          </select>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-gray-300 rounded-md">Day</button>
            <button className="px-4 py-2 border border-gray-300 rounded-md bg-gray-200">Week</button>
            <button className="px-4 py-2 border border-gray-300 rounded-md">Month</button>
          </div>
        </div>
      </div>

      {/* Calendar */}
      <div className="border border-gray-300 rounded-lg overflow-hidden bg-white">
        {/* Days Header */}
        <div className="grid grid-cols-8 gap-0 border-b">
          <div className="bg-gray-50 p-4 font-medium text-center">Time</div>
          {days.map((day, index) => (
            <div key={index} className="bg-gray-50 p-4 font-medium text-center">
              {day}
            </div>
          ))}
        </div>

        {/* Time Slots */}
        {times.map((time, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-8 gap-0 border-b">
            {/* Time Column */}
            <div className="p-4 text-center font-medium">{time}</div>

            {/* Session Columns */}
            {days.map((day, colIndex) => {
              const session = sessions.find(
                (s) => s.time === time && day.startsWith(s.day)
              );
              return (
                <div
                  key={colIndex}
                  className="p-2 relative border-l border-gray-200 h-20"
                >
                  {session && (
                    <div
                      className={`${session.color} rounded-lg p-2 text-sm font-medium text-gray-700`}
                    >
                      {session.title}
                      <div className="text-xs text-gray-500">
                        {session.students} Students
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Upcoming Sessions */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-4">Upcoming Sessions</h2>
        <div className="bg-white border border-gray-200 rounded-lg">
          {upcomingSessions.map((session, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b p-4 last:border-none"
            >
              <div>
                <p className="font-medium">{session.title}</p>
                <p className={`text-sm ${session.statusColor}`}>{session.time}</p>
              </div>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SessionCalendar;
