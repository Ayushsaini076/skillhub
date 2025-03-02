import React, { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const OnboardingForm = () => {
  const [file, setFile] = useState(null);
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    phoneNumber: null,
    profilePhoto: "", // Will store cloudinary URL
    videoFile: "", // Will store cloudinary URL
    experience: null,
    subject: "",
    associatedSkills: [],
    onetooneavailability: false,
    batchavailability: false,
    curriculum: "",
    About: "",
    AboutClass: "",
    languageSpoken: [],
    Fee: null,
    certificate: "",
    password: "",
    batchSessions: [], // IDs from DB
  });
  const cloud_name = process.env.CLOUD_NAME;
  const upload_preset = process.env.UPLOAD_PRESET;
  const uploadToCloudinary = async (file) => {
    if (!file) return;

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", upload_preset);
    data.append("cloud_name", cloud_name);

    const res = await axios.post(
      `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
      data
    );
    console.log(res.data.secure_url);

    return res.data.secure_url;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(e.target)
    console.log(name);
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = async (e) => {
    setFile(e.target.files[0]);
  };

  const handleClick = () => {
    console.log(formData);
    const uploadphoto = async () => {
      let avatarUrl = file;
      if (avatarUrl instanceof File) {
        avatarUrl = await uploadToCloudinary(avatarUrl);
        if (!avatarUrl) {
          alert("Image upload failed.");
          return;
        }
      }

      formData.profilePhoto = avatarUrl;
    };
    uploadphoto();
    navigate("/onboarding/step-2", {
      state: formData,
    });
    
  };

  // useEffect(() => {
  //   if (formData.profilePhoto) {
      
  //   }
  // }, [formData.profilePhoto, navigate]);

  return (
    <section id="onboarding_form" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate__animated animate__fadeIn">
          <h2 className="text-3xl font-bold text-neutral-800 mb-4">
            Let's Get You Started!
          </h2>
          <div className="flex justify-center space-x-4 mb-8">
            <div className="flex items-center">
              <span className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center">
                1
              </span>
              <div className="h-1 w-16 bg-orange-500"></div>
            </div>
            <div className="flex items-center">
              <span className="w-8 h-8 rounded-full bg-neutral-300 text-white flex items-center justify-center">
                2
              </span>
              <div className="h-1 w-16 bg-neutral-300"></div>
            </div>
            <div className="flex items-center">
              <span className="w-8 h-8 rounded-full bg-neutral-300 text-white flex items-center justify-center">
                3
              </span>
            </div>
          </div>
        </div>

        <form className="space-y-8 animate__animated animate__fadeInUp">
          <div className="bg-white rounded-lg p-8 shadow-lg border border-neutral-200">
            <h3 className="text-xl font-semibold mb-6 text-neutral-800">
              Basic Information
            </h3>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Full Name
                </label>
                <input
                  onChange={handleChange}
                  name="fullName"
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  required
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Email
                </label>
                <input
                  onChange={handleChange}
                  name="email"
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  required
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Phone Number
                </label>
                <input
                  onChange={handleChange}
                  name="phoneNumber"
                  type="Number"
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  required
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Profile Picture
                </label>
                {/* <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 border-dashed rounded-lg hover:border-orange-500 cursor-pointer transition-colors">
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
                </div> */}
                <div>
                  {/* <label className="block text-blue-700">Upload Avatar</label> */}
                  <input
                    type="file"
                    name="profilePhoto"
                    accept="image/*"
                    onChange={handleFileChange}
                    // required={isSignUp}
                    className="w-full p-2 border border-neutral-300 rounded-lg"
                  />
                </div>
              </div>

              <div className="flex justify-end">
                {/* <Link to={{pathname:'/onboarding/step-2',state:formData}}> */}
                <button
                  onClick={handleClick}
                  type="button"
                  className="px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                >
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

export default OnboardingForm;
