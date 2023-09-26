import React from "react";

const Hero = ({search, setSearch, fetchMovies}) => {
  return (
    <div  className="grid place-content-center bg">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-5xl text-white font-bold ">
          Discover, Watch, Enjoy.
        </h1>
        <div className="flex flex-wrap gap-1">
          <input
            type="text"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            placeholder="Search Movie Here..."
            className="px-10 py-4 rounded-lg placeholder:text-slate-500 outline-none "
          />
          <button className="px-10 py-4 rounded-lg text-white font-bold outline-none bg-blue-500"
          onClick={fetchMovies}
          >Search</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
