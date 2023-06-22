import React, { useState, useEffect } from "react";
import { MovieCard } from "./MovieCard";
import { Link } from "react-router-dom";

export const SearchedMovies = function (props) {
  const [movies, setMovies] = useState([]);

  const fetchData = () => {
    return fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=7606ac3c88b8c80aa84509448945bb32&query=${props.searchValue}`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <div>
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
