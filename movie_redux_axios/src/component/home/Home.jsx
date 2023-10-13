import React, { useEffect } from "react";
import MovieList from "../movieListing/MovieList";
import "./Home";
import { useDispatch } from "react-redux";
import {  fetchAsyncMovies, fetchAsyncShows } from "../../feature/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  const movieText = "harry";
  const showText = 'friends';
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText))
    dispatch(fetchAsyncShows(showText))
  }, [dispatch]);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieList />
    </div>
  );
};

export default Home;
