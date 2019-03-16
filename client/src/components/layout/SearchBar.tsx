import React from 'react';

const placeholderText = 'try ';

export default class Search extends React.Component {
  state = {
    placeholder: ""
  }

  render() {
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
}
