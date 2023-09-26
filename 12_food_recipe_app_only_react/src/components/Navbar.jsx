import React from "react";

const Navbar = () => {
  return (
     <nav className="w-full h-20 bg-black flex flex-wrap justify-between items-center text-white px-8 py-2">
          <div className="font-bold text-3xl">
               fooddy
          </div> 
          <ul className="flex flex-wrap gap-4 ">
               <li className="bg-white rounded-sm text-black text-base px-2 py-1 text-xl font-semibold cursor-pointer hover:bg-blue-300 active:bg-blue-500 active:text-white">Home</li>
               <li className="bg-white rounded-sm text-black text-base px-2 py-1 text-xl font-semibold cursor-pointer hover:bg-blue-300 active:bg-blue-500 active:text-white">Recipes</li>
               <li className="bg-white rounded-sm text-black text-base px-2 py-1 text-xl font-semibold cursor-pointer hover:bg-blue-300 active:bg-blue-500 active:text-white">About </li>
          </ul>
     </nav>
  )
};

export default Navbar;
