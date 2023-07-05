import React, { useState, useContext } from "react";
import { Search } from "./Search";
import BurgerMenu from "./BurgerMenu";
import SortMovies from "./SortMovies";
import { Link } from "react-router-dom";
import { DarkThemeContext } from "../context/DarkThemeContext";

export const Header = function ({
  searchValue,
  movies,
  setMovies,
  setSearchValue,
  handleSearch,
}) {
  const { darkTheme, setDarkTheme } = useContext(DarkThemeContext);
  return (
    <>
      <div className="header">
        <Link to="/" className="linkToHomePage">
          <h1>MOVIES</h1>
        </Link>

        <div className="sort-theme">
          <SortMovies setMoviesData={setMovies} moviesData={movies} />

          <button onClick={() => setDarkTheme(!darkTheme)}>
            {darkTheme ? "WHITE" : "DARK"}
          </button>
        </div>

        <Search
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          className="search"
          handleSearch={handleSearch}
        />

        <BurgerMenu />
      </div>
    </>
  );
};
