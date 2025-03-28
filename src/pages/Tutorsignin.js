import React from "react";
import { useState,useEffect } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const SignIn = () => {
    const [logdata, setLogdata] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const [id,setId]=useState('');

    const handleChange = (e) => {
      const { name, value} = e.target;
      setLogdata({
        ...logdata,
        [name]: value,
      });
    };
    const server_url = process.env.SERVER_URL
    const handleClick=async()=>{
        const res = await axios.post(`${server_url}/api/v1/teachers/login`,logdata)

        console.log(res.data.data.teacher._id)

        setId(res.data.data.teacher._id);

    }

    useEffect(()=>{
        if(id){
            navigate(`/tutordash/${id}`)
        }
    },[id,navigate])


  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">Sign In</h2>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-1">Password</label>
          <input
            name="password"
            type="password"
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        {/* Sign In Button */}
        {/* <Link to={``}> */}
        <button onClick={handleClick} className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition">
          Sign In
        </button>
        {/* </Link> */}
        

        {/* Sign Up Link */}
        {/* <p className="text-center text-sm text-gray-700 mt-4">
          Don't have an account? <a href="#" className="text-blue-700 font-semibold">Sign Up</a>
        </p> */}
      </div>
    </div>
  );
};

export default SignIn;
