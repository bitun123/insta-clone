import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function Registration() {
  const { loading, handleRegister } = useAuth();
  const navigate = useNavigate();

  const [userName, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (loading) {
    return (
      <div className="w-full h-screen bg-black flex items-center justify-center">
        <h1 className="text-white text-2xl">Loading...</h1>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await handleRegister(userName, email, password);
    console.log(res);
    navigate("/login");

    setuserName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center px-4 py-8">
      {/* Main Container */}
      <div className="w-full max-w-sm">
        {/* Sign Up Card */}
        <div className="border border-gray-700 bg-black rounded-lg px-8 py-12 mb-4 flex flex-col items-center">
          {/* Instagram Logo */}
          <h1 className="text-4xl font-light text-white mb-6 tracking-widest" style={{ fontFamily: 'Georgia, serif' }}>
            Instagram
          </h1>

          {/* Sign Up Subtitle */}
          <p className="text-gray-400 text-center text-sm mb-8 px-2">
            Sign up to see photos and videos from your friends.
          </p>

          {/* Sign Up Form */}
          <form className="w-full flex flex-col gap-3" onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 focus:bg-gray-800 transition"
            />
            <input
              type="text"
              name="userName"
              placeholder="Full Name"
              value={userName}
              onChange={(e) => setuserName(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 focus:bg-gray-800 transition"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 focus:bg-gray-800 transition"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md mt-2 active:scale-98 cursor-pointer transition duration-200"
            >
              Sign up
            </button>
          </form>

          {/* Terms */}
          <p className="text-gray-500 text-xs text-center mt-6 px-2">
            By signing up, you agree to our Terms, Data Policy and Cookies Policy.
          </p>
        </div>

        {/* Login Card */}
        <div className="border border-gray-700 bg-black rounded-lg px-8 py-6 text-center">
          <p className="text-gray-300 text-sm">
            Have an account?{" "}
            <Link to="/login" className="text-blue-400 hover:text-blue-300 font-semibold transition">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Registration;
