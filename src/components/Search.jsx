import React from "react";

export const Search = function ({ searchValue, setSearchValue, handleSearch }) {
  return (
    <div>
      <form className="search-form">
        <input
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={(e) => (e.key === "Enter" ? handleSearch() : null)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
};
