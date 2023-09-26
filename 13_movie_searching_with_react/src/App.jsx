import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MovieCard from "./components/MovieCard";
import Navbar from "./components/Navbar";

function App() {
  const [search, setSearch] = useState("");
  const [allMovies, setAllMovies] = useState([]);

  const [loading, setLoading] = useState(false);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://omdbapi.com/?s=${search}&apikey=93b12ee7`
      );
      const data = await res.json();
      setAllMovies(data.Search);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <Hero search={search} setSearch={setSearch} fetchMovies={fetchMovies} />
      <MovieCard allMovies={allMovies} loading={loading}/>
      <Footer />
    </>
  );
}

export default App;
