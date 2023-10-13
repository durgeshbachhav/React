import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import user from "../../images/user.png";
import "./Header.scss";
import { fetchAsyncMovies, fetchAsyncShows } from "../../feature/movies/movieSlice";

const Header = () => {
  const [search, setSearch]=useState('')
  const dispatch = useDispatch();
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(search == '') return alert('please enter a movie or series')
    dispatch(fetchAsyncMovies(search))
    dispatch(fetchAsyncShows(search))
    setSearch("")
  }
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Movies</Link>
      </div>
      <div className="search-bar" >
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Search movies or shows' value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <button>search</button>
        </form>
      </div>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
