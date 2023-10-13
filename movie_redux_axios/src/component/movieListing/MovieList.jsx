import React from "react";
import "./MovieList.scss";
import { useSelector } from "react-redux";

import { getAllMovies, getAllShows } from "../../feature/movies/movieSlice";
import MovieCard from "../moviecard/MovieCard";

const MovieList = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  let rendermovies , rendershows = "";

  rendermovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div>
        <h3>{movies.error}</h3>
      </div>
    );
    rendershows =
    shows.Response === "True" ? (
      shows.Search.map((show, index) => (
        <MovieCard key={index} data={show} />
      ))
    ) : (
      <div>
        <h3>{shows.error}</h3>
      </div>
    );

  console.log("movies", movies);
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{rendermovies}</div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">{rendershows}</div>
      </div>
    </div>
  );
};

export default MovieList;
