// MovieDetail.js
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMovieOrShowDetail, getSelectedMovieOrShow, removeSelectedMovieOrShow } from '../../feature/movies/movieSlice'; // Replace with your actual Redux actions
import './MovieDetail.scss'

import './MovieDetail.scss'; // Import the Sass file

const MovieDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(id));
    return ()=>{
      dispatch(removeSelectedMovieOrShow())
    }
  }, [dispatch, id]);

  return (
    <div className="movie-detail-container">
      {Object.keys(data).length === 0 ? <div>loading...</div> : 
      <>
      <div className="movie-header">
        <h1>{data.Title}</h1>
        <p>Released: {data.Released}</p>
      </div>
      <div className="movie-content">
        <img src={data.Poster} alt={data.Title} className="movie-poster" />
        <div className="movie-info">
          <p>
            <strong>Genre:</strong> {data.Genre}
          </p>
          <p>
            <strong>Director:</strong> {data.Director}
          </p>
          <p>
            <strong>Language:</strong> {data.Language}
          </p>
          <p>
            <strong>Runtime:</strong> {data.Runtime}
          </p>
          <p>
            <strong>IMDb Rating:</strong> {data.imdbRating}
          </p>
          <p>
            <strong>Plot:</strong> {data.Plot}
          </p>
        </div>
      </div>
      </>
      }
    </div>
  );
};

export default MovieDetail;
