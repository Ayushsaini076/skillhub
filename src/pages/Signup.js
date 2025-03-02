import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { Button } from '@/components/ui/button'; // Assuming you're using shadcn/ui for buttons

export default function AuthPage() {
  const base_url = process.env.BASE_URL
  const upload_preset = process.env.UPLOAD_PRESET
  const cloud_name = process.env.CLOUD_NAME
  const [isSignUp, setIsSignUp] = useState(true); // Toggle between SignUp and SignIn
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    avatar: null,
    password: "",
  });

  const [logdata, setLogdata] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // ✅ Form Validation
  const isFormValid = () => {
    if (isSignUp) {
      return (
        formData.fullName.trim() !== "" &&
        formData.email.trim() !== "" &&
        formData.password.trim() !== "" &&
        formData.avatar !== null
      );
    } else {
      return formData.email.trim() !== "" && formData.password.trim() !== "";
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      alert("Please fill all required fields!");
      return;
    }

    if (isSignUp) {
      console.log("Sign Up Data:", formData);
      // Call sign-up API here
      let avatarUrl = formData.avatar;
      if (avatarUrl instanceof File) {
        avatarUrl = await uploadToCloudinary(avatarUrl);
        if (!avatarUrl) {
          alert("Image upload failed.");
          return;
        }
      }

      formData.avatar = avatarUrl;

      const postData = async () => {
        const res = await axios.post(
          `${base_url}/api/v1/students/register`,
          formData
        );
        if (res.statusText === "Created") {
          navigate("/search");
        }
        console.log(res);
      };

      postData();
    } else {
      //   console.log('Sign In Data:', {
      //     email: formData.email,
      //     password: formData.password,
      //   });

      //   const logdata = new FormData();
      //   logdata.append('email',formData.email)
      //   logdata.append('password',formData.password)
      setLogdata({
        
        email: formData.email,
        password: formData.password,
      });

      console.log(logdata);
      // Call sign-in API here
      const res = await axios.post(
        `${base_url}/api/v1/students/login`,
        formData
      );
      console.log(res);
      localStorage.setItem("userId", res.data.data.student._id)
      if (res.status === 200) {
        navigate("/search");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-blue-600 text-center mb-6">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h2>

        {/* 🔄 Toggle between Sign Up and Sign In */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignUp && (
            <>
              <div>
                <label className="block text-blue-700">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required={isSignUp}
                  className="w-full p-2 border border-blue-300 rounded-lg focus:ring focus:ring-blue-200"
                />
              </div>

              <div>
                <label className="block text-blue-700">Upload Avatar</label>
                <input
                  type="file"
                  name="avatar"
                  accept="image/*"
                  onChange={handleChange}
                  required={isSignUp}
                  className="w-full p-2 border border-blue-300 rounded-lg"
                />
              </div>
            </>
          )}

          <div>
            <label className="block text-blue-700">Email</label>
            <input
              type="email"
              name="email"
              // value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-blue-300 rounded-lg focus:ring focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="block text-blue-700">Password</label>
            <input
              type="password"
              name="password"
              // value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-2 border border-blue-300 rounded-lg focus:ring focus:ring-blue-200"
            />
          </div>

          {/* 🔒 Disable the button until the form is valid */}
          <button
            type="submit"
            className={`w-full rounded-lg text-white ${
              isFormValid()
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-blue-300 cursor-not-allowed"
            }`}
            disabled={!isFormValid()}
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>

        {/* 🔄 Toggle Link */}
        <p className="mt-4 text-center text-blue-700">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            onClick={() => {
              setIsSignUp(!isSignUp);
              setFormData({
                email: "",
                fullName: "",
                avatar: null,
                password: "",
              });
            }}
            className="font-bold hover:underline"
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
}
