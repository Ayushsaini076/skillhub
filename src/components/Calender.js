import { useState } from "react";

export function ScheduleCalendar() {
  const [selectedSlots, setSelectedSlots] = useState([]);

  const timeSlots = [
    "09:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00",
    "14:00 - 15:00", "15:00 - 16:00", "16:00 - 17:00",
    "17:00 - 18:00", "18:00 - 19:00"
  ];

  const toggleSlot = (slot) => {
    setSelectedSlots((prev) =>
      prev.includes(slot) ? prev.filter((s) => s !== slot) : [...prev, slot]
    );
  };

  const quickSelect = (range) => {
    const ranges = {
      morning: timeSlots.slice(0, 3),
      afternoon: timeSlots.slice(3, 5),
      evening: timeSlots.slice(5),
    };
    setSelectedSlots(ranges[range] || []);
  };

  return (
    <section id="schedule_calendar" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-neutral-800 mb-4">Set Your Teaching Schedule</h2>
          <p className="text-neutral-600">Select your available time slots for the upcoming week</p>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg border border-neutral-200">
          <div className="grid grid-cols-7 gap-4 mb-6 text-center font-medium text-neutral-600">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day}>{day}</div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-medium text-neutral-800 mb-4">Time Slots</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {timeSlots.map((slot) => (
                  <label
                    key={slot}
                    className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-orange-50 transition-colors"
                  >
                    <input
                      type="checkbox"
                      className="form-checkbox text-orange-500 rounded h-5 w-5 mr-2"
                      checked={selectedSlots.includes(slot)}
                      onChange={() => toggleSlot(slot)}
                    />
                    <span className="text-sm">{slot}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-medium text-neutral-800 mb-4">Quick Selection</h3>
              <div className="flex flex-wrap gap-4">
                {[
                  { label: "Morning Slots", range: "morning" },
                  { label: "Afternoon Slots", range: "afternoon" },
                  { label: "Evening Slots", range: "evening" },
                ].map(({ label, range }) => (
                  <button
                    key={label}
                    type="button"
                    className="px-4 py-2 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 transition-colors"
                    onClick={() => quickSelect(range)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t pt-6 flex justify-between">
              <button type="button" className="px-8 py-3 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition-colors">
                Back
              </button>
              <button type="button" className="px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                Save Schedule
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}