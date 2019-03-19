import React from 'react';

const SearchBar = () => {
  return (
    <React.Fragment>
      <header className="SearchBar" role="searchbar">
        <div className="SearchBar-Component">
          <input className="SearchBar-Input" type="text" name="PiX-Search" placeholder="Search"/>
        </div>
      </header>
    </React.Fragment>
  )
}

export default SearchBar;
