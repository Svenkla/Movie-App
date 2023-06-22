import React, { useState, useEffect, useContext } from "react";
import { Header } from "../components/Header";
import { Movies } from "../components/Movies";
import { DarkThemeContext } from "../context/DarkThemeContext";

export const Home = function () {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);

  const fetchData = async (search) => {
    const fetchLink = search
      ? `https://api.themoviedb.org/3/search/movie?api_key=7606ac3c88b8c80aa84509448945bb32&query=${search}`
      : "https://api.themoviedb.org/3/movie/popular?api_key=7606ac3c88b8c80aa84509448945bb32&language=en-US&page=1";

    return await fetch(fetchLink)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  };

  useEffect(() => {
    fetchData();
  }, [searchValue]);

  const handleSearch = () => {
    if (searchValue === "") fetchData();
    fetchData(searchValue);
  };

  return (
    <div>
      <Header
        movies={movies}
        setMovies={setMovies}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleSearch={handleSearch}
      />
      <Movies searchValue={searchValue} movies={movies} />
    </div>
  );
};
