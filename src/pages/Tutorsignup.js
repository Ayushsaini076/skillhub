import React from "react";
import { Link } from "react-router-dom";

const AuthLandingPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src="https://thumbs.dreamstime.com/b/classroom-kids-teacher-professor-teaches-students-first-grade-elementary-school-class-little-children-preschool-120236345.jpg"
            alt="Teaching"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 flex flex-col justify-center p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to HobbiGo</h2>
          <p className="text-gray-600 mb-6">
            Enhance your learning journey with the best educators!
          </p>

          <div className="space-y-4">
            <Link to="/onboarding/step-1">
              <button className="w-full bg-blue-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition">
                Sign Up
              </button>
            </Link>
            <Link to="/tutorsignin">
              <button className="w-full mt-4 border border-blue-500 text-blue-500 py-3 rounded-lg text-lg font-semibold hover:bg-orange-50 transition">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLandingPage;
