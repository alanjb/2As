import React, {Component, createRef} from 'react';
import HomeIcon from '../assets/HomeIcon';

class NavPanel extends React.Component<MyProps> {
  constructor(props: any){
    super(props);
  }

  public render() {
    let navPanelClasses = 'navigation-navpanel';
    const {isOpen} = this.props;
    if(isOpen){
      navPanelClasses = 'navigation-navpanel open';
    }
    else{
      navPanelClasses = 'navigation-navpanel '
    }
    return(
      <header className="NavPanel">
        <div className="NavPanel-Component">
          <nav className={navPanelClasses} id="navigation-navpanel">
              <ul className="navpanel-ul">
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
              </ul>
          </nav>
        </div>
      </header>
    );
  }
}

type MyProps = {
  isOpen: boolean;
};

type Props = MyProps;

export default NavPanel;
