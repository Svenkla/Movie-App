import React from "react";
import { Search } from "./Search";
import { useEffect, useState, useMemo } from "react";
import { MovieCard } from "./MovieCard";
import { SearchedMovies } from "./SearchedMovies";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkThemeContext } from "../context/DarkThemeContext";

export const Movies = function ({ movies, searchValue }) {
  const { darkTheme, setDarkTheme } = useContext(DarkThemeContext);
  return (
    <div className={darkTheme ? "darktheme" : "whitetheme"}>
      <div className="allMovies">
        {movies &&
          movies.map((movie, index) => (
            <Link to={`/movieinfo/${movie.id}`} className="linkdoinfo">
              <MovieCard key={index} movie={movie} />
            </Link>
          ))}

        {movies.length > 0 && <SearchedMovies searchValue={searchValue} />}
      </div>
    </div>
  );
};
