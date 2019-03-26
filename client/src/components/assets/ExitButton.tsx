import React from 'react';
import exitSVG from '../../assets/exitX.svg';
import Context from '../../config/Context';

const ExitButton = () => (
  <Context.Consumer>
    {context => (
      <React.Fragment>
        <header className="ExitButton">
          <div className="ExitButton-Component">
            <img src={exitSVG} className="form-exitButton" alt="exitButton" onClick={context.toggleInviteToPortalModal}/>
          </div>
        </header>
        </React.Fragment>
      )}
    </Context.Consumer>
);

export default ExitButton;
