import React from "react";
import { DarkThemeContext } from "../context/DarkThemeContext";
import { useContext } from "react";

export const MovieCard = function ({ movie }) {
  const { darkTheme } = useContext(DarkThemeContext);

  return (
    <div className="movieCard">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt={movie.title}
      />
      <p className={darkTheme ? "darkcolor" : ""}>{movie.original_title}</p>
    </div>
  );
};
