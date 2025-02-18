import React, { useState } from 'react';

const OnboardingForm = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <section id="onboarding_form" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate__animated animate__fadeIn">
          <h2 className="text-3xl font-bold text-neutral-800 mb-4">Let's Get You Started!</h2>
          <div className="flex justify-center space-x-4 mb-8">
            <div className="flex items-center">
              <span className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center">1</span>
              <div className="h-1 w-16 bg-orange-500"></div>
            </div>
            <div className="flex items-center">
              <span className="w-8 h-8 rounded-full bg-neutral-300 text-white flex items-center justify-center">2</span>
              <div className="h-1 w-16 bg-neutral-300"></div>
            </div>
            <div className="flex items-center">
              <span className="w-8 h-8 rounded-full bg-neutral-300 text-white flex items-center justify-center">3</span>
            </div>
          </div>
        </div>

        <form className="space-y-8 animate__animated animate__fadeInUp">
          <div className="bg-white rounded-lg p-8 shadow-lg border border-neutral-200">
            <h3 className="text-xl font-semibold mb-6 text-neutral-800">Basic Information</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Full Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" required placeholder="Enter your full name" />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Profile Picture</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 border-dashed rounded-lg hover:border-orange-500 cursor-pointer transition-colors">
                  <div className="space-y-1 text-center">
                    <svg className="mx-auto h-12 w-12 text-neutral-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="flex text-sm text-neutral-600">
                      <label className="relative cursor-pointer rounded-md font-medium text-orange-600 hover:text-orange-500">
                        <span>Upload a file</span>
                        <input type="file" className="sr-only" accept="image/*" onChange={handleFileChange} />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-neutral-500">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button type="button" className="px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default OnboardingForm;