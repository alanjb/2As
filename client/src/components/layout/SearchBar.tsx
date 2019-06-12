import React from 'react';

const SearchBar:React.FC<Props> = (props:any) => {
  return (
    <div className="SearchBar-Component">
      <input 
      className="SearchBar-Input" 
      name="PiX-Search" 
      placeholder="Search"
      id="example-search-input"
      />
    </div>
  )
}

type Props = {};

export default SearchBar;
