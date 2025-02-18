import React from "react";

const batches = [
  {
    title: "Guitar Basics - Batch A",
    schedule: "Mon, Wed, Fri • 10:00 AM",
    students: "8/10",
    sessionsCompleted: "12/24",
    price: "₹12,000",
    status: "Active",
    statusClass: "bg-green-100 text-green-800",
    actions: ["Edit", "End Batch"],
  },
  {
    title: "Advanced Guitar - Batch B",
    schedule: "Tue, Thu • 2:00 PM",
    students: "3/8",
    startDate: "15 Mar 2024",
    price: "₹15,000",
    status: "Upcoming",
    statusClass: "bg-yellow-100 text-yellow-800",
    actions: ["Edit", "Cancel"],
  },
  {
    title: "Guitar Basics - Batch Z",
    completedOn: "Completed on 1 Mar 2024",
    students: "10/10",
    sessionsCompleted: "24/24",
    revenue: "₹20,000",
    status: "Completed",
    statusClass: "bg-gray-100 text-gray-800",
    actions: ["View Report"],
  },
];

const BatchManagement = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Batch Management</h1>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search batches..."
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-200"
          />
          <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-200">
            <option>All Batches</option>
          </select>
          <button className="bg-black text-white px-4 py-2 rounded-md">Create New Batch</button>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {batches.map((batch, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">{batch.title}</h2>
              <span
                className={`px-2 py-1 text-sm font-medium rounded ${batch.statusClass}`}
              >
                {batch.status}
              </span>
            </div>
            <p className="text-sm text-gray-600">{batch.schedule || batch.completedOn}</p>
            <div className="mt-4 text-sm text-gray-800">
              {batch.students && (
                <p>
                  <strong>Students:</strong> {batch.students}
                </p>
              )}
              {batch.sessionsCompleted && (
                <p>
                  <strong>Sessions Completed:</strong> {batch.sessionsCompleted}
                </p>
              )}
              {batch.startDate && (
                <p>
                  <strong>Start Date:</strong> {batch.startDate}
                </p>
              )}
              {batch.revenue ? (
                <p>
                  <strong>Total Revenue:</strong> {batch.revenue}
                </p>
              ) : (
                <p>
                  <strong>Batch Price:</strong> {batch.price}
                </p>
              )}
            </div>
            <div className="mt-4 flex gap-2">
              <button className="flex-1 bg-gray-200 py-2 px-4 rounded text-sm font-medium text-gray-700 hover:bg-gray-300">
                View Details
              </button>
              {batch.actions.map((action, i) => (
                <button
                  key={i}
                  className={`flex-1 py-2 px-4 rounded text-sm font-medium ${
                    action === "Cancel" || action === "End Batch"
                      ? "bg-red-100 text-red-700 hover:bg-red-200"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {action}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BatchManagement;
