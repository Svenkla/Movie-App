import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MovieCard } from "./MovieCard";

const SortMovies = ({ moviesData, setMoviesData }) => {
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    if (sortType === "ascending") {
      setMoviesData(
        [...moviesData].sort((a, b) =>
          a.original_title.localeCompare(b.original_title)
        )
      );
    } else if (sortType === "descending") {
      setMoviesData(
        [...moviesData].sort((a, b) =>
          b.original_title.localeCompare(a.original_title)
        )
      );
    }
  }, [sortType]);

  return (
    <div>
      <div>
        <select
          defaultValue="default"
          onChange={(e) => setSortType(e.target.value)}
        >
          <option disabled value="default">
            Sort by
          </option>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>

      {/* <div className="allMovies">
        {moviesData &&
          sortType === "ascending" &&
          sortedMovies &&
          sortedMovies.map((movie, index) => (
            <Link to={`/movieinfo/${movie.id}`} className="linkdoinfo">
              <MovieCard key={index} movie={movie} />
            </Link>
          ))}

        {moviesData &&
          sortType === "descending" &&
          sortedMovies &&
          sortedMovies.map((movie, index) => (
            <Link to={`/movieinfo/${movie.id}`} className="linkdoinfo">
              <MovieCard key={index} movie={movie} />
            </Link>
          ))}
      </div> */}
    </div>
  );
};

export default SortMovies;
