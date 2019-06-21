import React, {Component, createRef} from 'react';
import HomeIcon from '../assets/HomeIcon';

const NavPanel = (Props: Props) => { 
  let navPanelClasses = 'navigation-navpanel';
  const {isOpen} = Props;
  if(isOpen){
    navPanelClasses = 'navigation-navpanel open';
  }
  else{
    navPanelClasses = 'navigation-navpanel '
  }
  return(
    <div className="NavPanel-Component">
      <nav className={navPanelClasses} id="navigation-navpanel">
          {/* <ul className="navpanel-ul">
            
          </ul> */}
      </nav>
    </div>

  );
}

type MyProps = {
  isOpen: boolean;
};

type Props = MyProps;

export default NavPanel;



{/*

<li className="item">
              <a href="/html/">Home</a>
              <a className="item-icon" href="/html/"><HomeIcon/></a>
            </li>
            <li className="item">
              <a href="/html/">Communities</a>
              <a className="item-icon" href="/html/"><HomeIcon/></a>
            </li>
            <li className="item">
              <a href="/html/">Portals</a>
              <a className="item-icon" href="/html/"><HomeIcon/></a>
            </li>
            <li className="item">
              <a href="/html/">RFIs</a>
              <a className="item-icon" href="/html/"><HomeIcon/></a>
            </li>
            <li className="item">
              <a href="/html/">Invite New User</a>
              <a className="item-icon" href="/html/"><HomeIcon/></a>
            </li>
            <li className="item">
              <a href="/html/">Partner Applications</a>
              <a className="item-icon" href="/html/"><HomeIcon/></a>
            </li>
*/}