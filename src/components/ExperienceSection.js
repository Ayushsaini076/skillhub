import React, { useState } from 'react';

const AboutExperience = () => {
  const [teachingStyle, setTeachingStyle] = useState('');
  const [videoFile, setVideoFile] = useState(null);
  const [videoLink, setVideoLink] = useState('');

  const handleFileChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="about_experience" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center space-x-4 mb-8">
            <div className="flex items-center">
              <span className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center">✓</span>
              <div className="h-1 w-16 bg-orange-500"></div>
            </div>
            <div className="flex items-center">
              <span className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center">✓</span>
              <div className="h-1 w-16 bg-orange-500"></div>
            </div>
            <div className="flex items-center">
              <span className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center">3</span>
            </div>
          </div>
        </div>

        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="bg-white rounded-lg p-8 shadow-lg border border-neutral-200">
            <h3 className="text-xl font-semibold mb-6 text-neutral-800">About Your Teaching Experience</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Tell us about your teaching style and approach
                </label>
                <textarea 
                  rows="4" 
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Share your teaching philosophy, methods, and what makes your classes unique..."
                  value={teachingStyle}
                  onChange={(e) => setTeachingStyle(e.target.value)}
                  required
                ></textarea>
                <p className="mt-2 text-sm text-neutral-500">Minimum 100 characters</p>
              </div>

              <div className="space-y-4">
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Upload a Demo Video
                </label>
                <div className="border-2 border-dashed border-neutral-300 rounded-lg p-6 hover:border-orange-500 transition-colors">
                  <div className="text-center">
                    <svg className="mx-auto h-12 w-12 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h3m13 0h3M3 12h18M3 16h3m13 0h3M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                    </svg>
                    <div className="mt-4">
                      <label className="cursor-pointer">
                        <span className="mt-2 text-base leading-normal text-orange-500 hover:text-orange-600">
                          Upload a video
                        </span>
                        <input type="file" className="hidden" accept="video/*" onChange={handleFileChange} />
                      </label>
                      <p className="text-xs text-neutral-500 mt-1">Or drag and drop a video file</p>
                    </div>
                    <p className="text-xs text-neutral-500 mt-2">MP4, WebM or Ogg file. Maximum file size 100MB</p>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Or provide a video link
                </label>
                <input 
                  type="url" 
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="YouTube or Vimeo link to your teaching demo"
                  value={videoLink}
                  onChange={(e) => setVideoLink(e.target.value)}
                />
              </div>

              <div className="flex justify-between">
                <button type="button" className="px-8 py-3 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition-colors">
                  Back
                </button>
                <button type="submit" className="px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
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

export default AboutExperience;