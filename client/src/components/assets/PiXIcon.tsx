import React from 'react';
import icon from '../../assets/pix-icon.svg';
import Context from '../../config/Context';

const PiXIcon = () => {
  return(
    <Context.Consumer>
      {context => (
        <React.Fragment>
          <header className="PiXIcon">
            <div className="PiXIcon-Component">
              <img className="PiX-Icon" src={icon} onClick={context.toggleSidePanel} alt="icon"/>
            </div>
          </header>
        </React.Fragment>
      )}
    </Context.Consumer>
  );
}

export default PiXIcon;
