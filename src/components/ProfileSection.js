import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation,useNavigate } from 'react-router-dom';
import { useState } from 'react';

const ProfileSection = () => {
  const location = useLocation();
  let navigate = useNavigate();
  // console.log(location.state)
  const [formData, setFormData] = useState(location.state);

  // console.log(formData)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClick=()=>{
    navigate('/onboarding/step-3',
      {
        state:formData
      }
    )
  }

  return (
    <section id="profile_section" className="py-20 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate__animated animate__fadeIn">
          <div className="flex justify-center space-x-4 mb-8">
            <div className="flex items-center">
              <span className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center">✓</span>
              <div className="h-1 w-16 bg-orange-500"></div>
            </div>
            <div className="flex items-center">
              <span className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center">2</span>
              <div className="h-1 w-16 bg-neutral-300"></div>
            </div>
            <div className="flex items-center">
              <span className="w-8 h-8 rounded-full bg-neutral-300 text-white flex items-center justify-center">3</span>
            </div>
          </div>
        </div>

        <form className="space-y-8 animate__animated animate__fadeInUp">
          <div className="bg-white rounded-lg p-8 shadow-lg border border-neutral-200">
            <h3 className="text-xl font-semibold mb-6 text-neutral-800">Profile Details</h3>
            
            <div className="space-y-6">

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Areas of Expertise
                </label>
                <input onChange={handleChange} name='subject' type="text" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" 
                  required placeholder="e.g., Mathematics, Music, Art, Programming" />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Teaching Experience (Years)
                </label>
                <input onChange={handleChange} name='experience' type="Number" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" 
                  required />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Languages Spoken
                </label>
                <input onChange={handleChange} name='languageSpoken' type="text" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" 
                  required />
                {/* <div className="flex flex-wrap gap-2">
                  <div className="flex items-center">
                    <input type="checkbox" checked={formData.languageSpoken.includes('english')} onChange={()=>handleArrayChange('languageSpoken','english')} id="english" className="rounded text-orange-500 focus:ring-orange-500" />
                    <label htmlFor="english" className="ml-2">English</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" checked={formData.languageSpoken.includes('Hindi')} onChange={()=>handleArrayChange('languageSpoken','Hindi')} id="spanish" className="rounded text-orange-500 focus:ring-orange-500" />
                    <label htmlFor="spanish" className="ml-2">Hindi</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" checked={formData.languageSpoken.includes('punjabi')} onChange={()=>handleArrayChange('languageSpoken','punjabi')} id="french" className="rounded text-orange-500 focus:ring-orange-500" />
                    <label htmlFor="french" className="ml-2">punjabi</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" checked={formData.languageSpoken.includes('other')} onChange={()=>handleArrayChange('languageSpoken','other')} id="other" className="rounded text-orange-500 focus:ring-orange-500" />
                    <label htmlFor="other" className="ml-2">Other</label>
                  </div>
                </div> */}
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Certifications (if any)
                </label>
                <input onChange={handleChange} name='certificate' type="text" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" 
                  placeholder="List any relevant certifications" />
              </div>

              <div className="flex justify-between">
                <button type="button" className="px-8 py-3 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition-colors">
                  Back
                </button>
                {/* <Link to={{pathname:'/onboarding/step-3',state:formData}}> */}
                <button onClick={handleClick} type="button" className="px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                  Continue
                </button>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ProfileSection;