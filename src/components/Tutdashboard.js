import React from "react";

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Stats Section */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { title: "Active Batches", value: "12", growth: "+2.5%" },
          { title: "Total Students", value: "48", growth: "+5.2%" },
          { title: "Monthly Earnings", value: "₹24,500", growth: "+12.5%" },
          // { title: "Hours Taught", value: "86", growth: "+8.1%" },
        ].map((stat, index) => (
          <div
            key={index}
            className="p-4 border rounded bg-gray-50 shadow-sm flex flex-col"
          >
            <span className="text-sm font-medium text-gray-600">
              {stat.title}
            </span>
            <span className="text-xl font-semibold text-gray-800">
              {stat.value}
            </span>
            <span className="text-sm text-green-500">{stat.growth}</span>
          </div>
        ))}
      </div>

      {/* Today's Sessions Section */}
      <div className="flex space-x-4">
        <div className="flex-1">
          <h2 className="font-semibold text-lg mb-4">Today's Sessions</h2>
          <div className="space-y-3">
            {[
              {
                name: "Guitar Basics - Batch A",
                time: "10:00 AM - 11:00 AM",
                students: "8 Students",
              },
              {
                name: "Intermediate Group - Batch B",
                time: "2:00 PM - 3:30 PM",
                students: "6 Students",
              },
              {
                name: "Advanced Techniques - Batch C",
                time: "5:00 PM - 6:30 PM",
                students: "4 Students",
              },
            ].map((session, index) => (
              <div
                key={index}
                className="p-4 border rounded flex justify-between items-center bg-white shadow-sm"
              >
                <div>
                  <h3 className="text-sm font-medium">{session.name}</h3>
                  <p className="text-xs text-gray-600">{session.time}</p>
                </div>
                <span className="text-xs text-gray-600">{session.students}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/4">
          <h2 className="font-semibold text-lg mb-4">Quick Actions</h2>
          <div className="space-y-2">
            {[
              "Create New Batch",
              "Schedule Session",
              "View Earnings",
              "Update Profile",
            ].map((action, index) => (
              <button
                key={index}
                className="w-full text-left px-4 py-2 bg-gray-50 border rounded hover:bg-gray-100"
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
