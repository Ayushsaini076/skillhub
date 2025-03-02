import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid4 } from 'uuid';

const Settings = () => {
  return (
    <section id="settings" className="page-section bg-neutral-900 min-h-screen p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-8">Settings</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Profile Settings */}
          <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700/30">
            <h3 className="text-xl font-semibold text-white mb-6">Profile Settings</h3>
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative">
                <img src="https://avatar.iran.liara.run/public" alt="Profile" className="w-20 h-20 rounded-full" />
                <button className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
              </div>
              <div className="flex-1">
                <label className="text-sm text-neutral-400">Full Name</label>
                <input type="text" defaultValue="John Doe" className="w-full bg-neutral-700/50 rounded-lg p-2 mt-1 text-white border border-neutral-600/30 focus:border-blue-500 transition" />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-neutral-400">Email Address</label>
                <input type="email" defaultValue="john@example.com" className="w-full bg-neutral-700/50 rounded-lg p-2 mt-1 text-white border border-neutral-600/30 focus:border-blue-500 transition" />
              </div>
              <div>
                <label className="text-sm text-neutral-400">Phone Number</label>
                <input type="tel" defaultValue="+1 234 567 8900" className="w-full bg-neutral-700/50 rounded-lg p-2 mt-1 text-white border border-neutral-600/30 focus:border-blue-500 transition" />
              </div>
              <div>
                <label className="text-sm text-neutral-400">Time Zone</label>
                <select className="w-full bg-neutral-700/50 rounded-lg p-2 mt-1 text-white border border-neutral-600/30 focus:border-blue-500 transition">
                  <option>UTC -8:00 (PST)</option>
                  <option>UTC -5:00 (EST)</option>
                  <option>UTC +0:00 (GMT)</option>
                  <option>UTC +5:30 (IST)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700/30">
            <h3 className="text-xl font-semibold text-white mb-6">Notification Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-medium">Session Reminders</h4>
                  <p className="text-sm text-neutral-400">Get notified before your sessions</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-neutral-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              {/* Add more notification settings here */}
            </div>
          </div>

          {/* Password Settings */}
          <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700/30">
            <h3 className="text-xl font-semibold text-white mb-6">Change Password</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-neutral-400">Current Password</label>
                <input type="password" className="w-full bg-neutral-700/50 rounded-lg p-2 mt-1 text-white border border-neutral-600/30 focus:border-blue-500 transition" />
              </div>
              <div>
                <label className="text-sm text-neutral-400">New Password</label>
                <input type="password" className="w-full bg-neutral-700/50 rounded-lg p-2 mt-1 text-white border border-neutral-600/30 focus:border-blue-500 transition" />
              </div>
              <div>
                <label className="text-sm text-neutral-400">Confirm New Password</label>
                <input type="password" className="w-full bg-neutral-700/50 rounded-lg p-2 mt-1 text-white border border-neutral-600/30 focus:border-blue-500 transition" />
              </div>
            </div>
          </div>

          {/* Privacy Settings */}
          <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700/30">
            <h3 className="text-xl font-semibold text-white mb-6">Privacy Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-medium">Profile Visibility</h4>
                  <p className="text-sm text-neutral-400">Make your profile visible to other students</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-neutral-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              {/* Add more privacy settings here */}
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-8 flex justify-end">
          <Link to={`/students/${uuid4()}`}>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-neutral-900">
            Save Changes
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Settings;
