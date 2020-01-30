import React, {Component, useState} from 'react';
import Menu from './Menu';
const { getMenuItems } = require('../../config/ConfigFunctions');
const menu = getMenuItems();
const menuItems = menu.menu.items;

class NavPanel extends React.Component<Props, State>{
  constructor(props: any){
    super(props);
  }

  state: State = {
    items: menuItems
  };

  render(){
    let navPanelClasses = 'navigation-navpanel';
    const { isOpen } = this.props;
    if(isOpen){
      navPanelClasses = 'navigation-navpanel open';
    }
    else{
      navPanelClasses = 'navigation-navpanel '
    }

    return(
      <div className="NavPanel-Component">
        <nav className={navPanelClasses} id="navigation-navpanel">
          <ul className="menu-navpanel">
            <Menu items={this.state.items}/>
          </ul>
        </nav>
      </div>
    );
  }
}

type MyProps = {
  isOpen: boolean;
};

type State = {
  items: [];
};

type Props = MyProps;

export default NavPanel;