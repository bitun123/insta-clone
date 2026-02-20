import React from "react";
import { Link } from "react-router-dom";

function Registration() {
  return (
    <div className="w-[100%] h-[100vh] bg-gray-900 flex flex-col gap-3 items-center justify-center">
      <div className="text-white">
        <h1 className="text-2xl font-semibold">Registration</h1>
      </div>
      <form className="flex flex-col gap-4">
        <input type="text" name="UserName" placeholder="enter your name"  className="bg-gray-300 border-none outline-none rounded-4xl px-3 py-2 text-black font-semibold text-xl"/>
        <input type="text" name="email" placeholder="enter your email" className="bg-gray-300 border-none outline-none rounded-4xl px-3 py-2 text-black font-semibold text-xl" />
        <input type="text" name="password" placeholder="enter your password"  className="bg-gray-300 border-none outline-none rounded-4xl px-3 py-2 text-black font-semibold text-xl"/>
        <button className="w-full bg-red-400 px-2 py-2 rounded-4xl active:scale-95 cursor-pointer">Registration</button>
      </form>
      <p className="text-xl text-white ">
        already have a account? <Link to={"/login"} className="text-red-500 cursor-pointer"> Login</Link>
      </p>
    </div>
  );
}

export default Registration;
