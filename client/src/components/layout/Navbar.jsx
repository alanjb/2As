import React from 'react';
import PiXIcon from '../../components/assets/PiXIcon';

const Navbar = () => {
  return(
    <React.Fragment>
      <header className="Navbar" role="banner">
        <div className="Navbar-Component">
          <nav className="navigation" id="navigation">
            <div className="navigation-logo">
              <PiXIcon/>

            </div>
            <div className="navigation-items">
              <ul>

              </ul>
            </div>
          </nav>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Navbar;
