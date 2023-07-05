import React, { useState, useEffect, useMemo } from "react";
import { MovieCard } from "../components/MovieCard";
import { Link } from "react-router-dom";
import BurgerMenu from "../components/BurgerMenu";
import SortMovies from "../components/SortMovies";
import { DarkThemeContext } from "../context/DarkThemeContext";
import { useContext } from "react";

const TopRatedMovies = () => {
  const { darkTheme, setDarkTheme } = useContext(DarkThemeContext);

  const [movies, setMovies] = useState([]);

  const fetchData = () => {
    return fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=7606ac3c88b8c80aa84509448945bb32&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  };
  //console.log(movies);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={darkTheme ? "darktheme" : "whitetheme"}>
      <div className="movieinfo toprated">
        <Link to="/" className="linkToHomePage">
          <h1>TOP RATED MOVIES</h1>
        </Link>

        <div className="sort-theme-toprated">
          <SortMovies setMoviesData={setMovies} moviesData={movies} />

          <button onClick={() => setDarkTheme(!darkTheme)}>
            {darkTheme ? "WHITE" : "DARK"}
          </button>
        </div>

        <BurgerMenu />
      </div>

      <div className="allMovies">
        {movies &&
          movies.map((movie, index) => (
            <Link to={`/movieinfo/${movie.id}`} className="linkdoinfo">
              <MovieCard key={index} movie={movie} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default TopRatedMovies;
