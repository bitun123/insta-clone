import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const { handleLogin, Loading, user } = useAuth();
  const navigate = useNavigate();

  if (Loading) {
    return (
      <div className="w-full h-screen bg-black flex items-center justify-center">
        <h1 className="text-white text-2xl">Loading...</h1>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
 const response =    await handleLogin({email, password});
 console.log("Login response:", response);
    navigate("/");
  };

  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center px-4 py-8">
      {/* Main Container */}
      <div className="w-full max-w-sm">
        {/* Logo/Title Card */}
        <div className="border border-gray-700 bg-black rounded-lg px-8 py-12 mb-4 flex flex-col items-center">
          {/* Instagram Logo */}
          <h1 className="text-4xl font-light text-white mb-12 tracking-widest" style={{ fontFamily: 'Georgia, serif' }}>
            Instagram
          </h1>

          {/* Login Form */}
          <form className="w-full flex flex-col gap-3" onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              placeholder="Phone number, username or email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 focus:bg-gray-800 transition"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 focus:bg-gray-800 transition"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md mt-2 active:scale-98 cursor-pointer transition duration-200"
            >
              Log in
            </button>
          </form>
        </div>

        {/* Sign Up Card */}
        <div className="border border-gray-700 bg-black rounded-lg px-8 py-6 text-center">
          <p className="text-gray-300 text-sm">
            Don't have an account?{" "}
            <Link to="/registration" className="text-blue-400 hover:text-blue-300 font-semibold transition">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
