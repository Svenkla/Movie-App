import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import BurgerMenu from "../components/BurgerMenu";
import { DarkThemeContext } from "../context/DarkThemeContext";

export const MovieInfo = function () {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const { darkTheme, setDarkTheme } = useContext(DarkThemeContext);

  const fetchData = () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=7606ac3c88b8c80aa84509448945bb32&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => setMovie(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={darkTheme ? "darktheme" : "whitetheme"}>
      <div className="movieinfo">
        <h1>MOVIE INFO</h1>

        <button
          onClick={() => setDarkTheme(!darkTheme)}
          className="movieinfo-theme"
        >
          {darkTheme ? "WHITE" : "DARK"}
        </button>

        <BurgerMenu />
      </div>

      <div className="movieinfobg">
        <div className="movieinfoContainer">
          <img
            className="movieinfoImg"
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          />
          <div className="movieinfoDetails">
            <h2 className="movieinfoTitle"> {movie.original_title} </h2>
            <p className="movieinfoOverview">
              <span className="bold">Overview:</span> {movie.overview}
            </p>
            <p>
              <span className="bold">Popularity:</span> {movie.popularity}
            </p>
            <p>
              <span className="bold">Release date:</span> {movie.release_date}
            </p>
            <p>
              <span className="bold">Runtime:</span> {movie.runtime} min
            </p>
            <p>
              <span className="bold">Vote average:</span> {movie.vote_average}
            </p>
            <p>
              <span className="bold">Languages:</span>

              {movie.spoken_languages?.map((language) => (
                <span> {language.english_name}, </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
