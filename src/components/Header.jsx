import React, { useState, useContext } from "react";
import { Search } from "./Search";
import { Movies } from "./Movies";
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

        <Search
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          className="search"
          handleSearch={handleSearch}
        />
        <BurgerMenu />
      </div>

      <div>
        <SortMovies setMoviesData={setMovies} moviesData={movies} />
      </div>
      <div>
        <button onClick={() => setDarkTheme(!darkTheme)}>
          {darkTheme ? "WHITE" : "DARK"}
        </button>
      </div>
    </>
  );
};
