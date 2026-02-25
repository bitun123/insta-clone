import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function Login() {
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");

  const { handleLogin, Loading,user } = useAuth();
const navigate = useNavigate();

  if (Loading) {
    return <h1>Loading.......</h1>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
   await handleLogin(userName, password);
   navigate("/");
 
  };

  return (
    <div className="w-[100%] h-[100vh] bg-gray-900 flex flex-col gap-3 items-center justify-center">
      <div className="text-white">
        <h1 className="text-2xl font-semibold">Login</h1>
      </div>
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          name="userName"
          placeholder="enter your name"
          className="bg-gray-300 border-none outline-none rounded-4xl px-3 py-2 text-black font-semibold text-xl"
          value={userName}
          onChange={(e) => {
            setuserName(e.target.value);
          }}
        />
        <input
          type="text"
          name="password"
          placeholder="enter your password"
          className="bg-gray-300 border-none outline-none rounded-4xl px-3 py-2 text-black font-semibold text-xl"
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <button className="w-full bg-red-400 px-2 py-2 rounded-4xl active:scale-95 cursor-pointer">
          Login
        </button>
      </form>
      <p className="text-xl text-white ">
        Don't have a account?{" "}
        <Link to={"/registration"} className="text-red-500 cursor-pointer">
          Registration
        </Link>
      </p>
    </div>
  );
}

export default Login;
