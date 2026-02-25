
import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full h-[10vh] bg-black border-b border-gray-800 flex items-center justify-center ">
      <div className="text-white flex items-center gap-[5rem]">
        <h1 className="text-3xl font-semibold bg-linear-to-r from-orange-500 to bg-orange-400 bg-clip-text text-transparent">Instagram</h1>
        <div className='w-[3.2rem] h-[3.2rem]  rounded-4xl  flex items-center justify-center bg-linear-to-r from-orange-600 to bg-blue-200 '>
            <img src="https://images.unsplash.com/photo-1769750685213-67ee9e56ab6e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""  className='w-[90%] h-[90%] rounded-4xl'/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

