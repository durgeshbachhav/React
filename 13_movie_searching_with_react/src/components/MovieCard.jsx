import React from "react";

const MovieCard = ({ allMovies, loading }) => {
  return (
    <div className="grid place-content-center mt-4">
      <h3 className="font-bold text-3xl">Discover Movies</h3>
      {/* movie card */}
      <div className="mt-4">
        {loading ? (
          <div className="flex justify-center ">
            <img
              className=" w-16 py-20"
              src="https://i.gifer.com/ZZ5H.gif"
              alt=""
            />
          </div>
        ) : (
          <div className="grid grid-cols-4  gap-x-8 gap-y-8 px-20 place-content-center ">
            {allMovies &&
              allMovies.map((movie, index) => {
                const { Title, Year, Type, Poster, imdbID } = movie;
                return (
                  <div key={index} className="border-2 border-black rounded px-4 py-2 flex flex-wrap flex-col ">
                    <div>
                      <img  src={Poster} alt="" className="w-full rounded-md"/>
                    </div>
                    <div className="text-white bg-black px-8 py-4 rounded-lg  mt-4 ">
                    <h2>{Title}</h2>
                    <p>Year: {Year}</p>
                    <p>Type : {Type}</p>
                    <p>IMDB : {imdbID}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
