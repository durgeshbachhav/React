import React from "react";

const Hero = ({search, setSearch, fetchfood}) => {
  return (
    <div className="w-full min-h-screen px-8 grid place-content-center h-96">
      <div className="flex flex-col items-center text-center">
        <h2 className="font-bold text-slate-600 text-7xl">Recipe Delight</h2>
        <p className="font-semibold text-slate-800 mt-5">
        Discover the Best Recipes, Handpicked Just for You!
       
        </p>
      </div>
      <div className="flex items-center flex-wrap mt-5 gap-4">
        <input
          type="text"
          placeholder="search Recipes"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          className="outline-none bg-slate-500 text-white px-14 py-4 rounded-md placeholder:text-yellow-50"
        />
        <button className=" px-14 py-4 bg-slate-900 rounded-md text-white"
        onClick={fetchfood}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Hero;
