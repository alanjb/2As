import React from 'react';
import icon from '../../assets/pix-icon.svg';

const PiXIcon = (Props: any) => {
  const {toggleNavPanel} = Props;
  return (
    <React.Fragment>
      <header className="PiXIcon">
        <div className="PiXIcon-Component">
          <img className="PiX-Icon-Discover" src={icon} onClick={toggleNavPanel} alt="icon"/>
        </div>
      </header>
    </React.Fragment>
  )
}

type MyProps = {
  toggleNavPanel: () => any;
};

type Props = MyProps;

export default PiXIcon;