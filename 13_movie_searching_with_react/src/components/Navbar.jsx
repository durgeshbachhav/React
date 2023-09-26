import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-wrap w-full h-20 text-white bg-slate-900 px-4 py-4 justify-between items-center">
      <h2 className="font-bold text-3xl">FilmFlix</h2>
      <ul className="hidden md:block md:flex md:flex-wrap md:gap-5">
        <li className="text-base hover:text-red-500 ">Home</li>
        <li className="text-base hover:text-red-500 ">Movies</li>
        <li className="text-base hover:text-red-500 ">About us</li>
      </ul>
      <button className="px-10 py-2 rounded-sm bg-white text-black text-base">
        signup
      </button>
    </div>
  );
};
export default Navbar;
