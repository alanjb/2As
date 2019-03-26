import React from 'react';

const SearchBar = () => {
  return (
      <header className="FilterBar" role="filterbar">
        <div className="FilterBar-Component">
          <input className="FilterBar-Input" type="text" name="filter" placeholder="Filter your portals"/>
        </div>
      </header>
  )
}

export default SearchBar;
