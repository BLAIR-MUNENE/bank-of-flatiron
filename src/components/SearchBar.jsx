import React from "react";

const SearchBar = ({ searchTerm, handleSearch }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search transactions..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
