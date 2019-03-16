import React from 'react';
import PiXIcon from '../../components/assets/PiXIcon';
import SearchBar from '../layout/SearchBar';
import Caret from '../assets/Caret';
import PiXChatIcon from '../../components/assets/PiXChatIcon';

const Navbar = () => {
  return(
    <React.Fragment>
      <header className="Navbar" role="banner">
        <div className="Navbar-Component">
          <nav className="navigation" id="navigation">
            <div className="navigation-logo">
              <PiXIcon/>
            </div>
            <div className="navigation-caret">
              <Caret/>
            </div>
          </nav>
          <div className="searchbar-area">
            <SearchBar/>
          </div>
          <div className="pixchat-area">
            <PiXChatIcon/>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Navbar;
