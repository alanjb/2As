import React from 'react';
import PiXIcon from '../../components/assets/PiXIcon';
import SearchBar from '../layout/SearchBar';
import NavPanel from '../layout/NavPanel';
import Menu from '../layout/Menu';
import Caret from '../assets/Caret';
import PiXChatIcon from '../../components/assets/PiXChatIcon';

const { getMenuItems } = require('../../config/ConfigFunctions');
const menu = getMenuItems();
const menuItemsArray = menu.menu.items;
const maxScreenWidthForNavPanel = 991;
class Navbar extends React.Component<Props, State> {
  constructor(props: any){
    super(props);
    this.toggle = this.toggle.bind(this);
  }

  state: State = {
    isNavPanelOpen: false,
    isFeedbackOpen: false, 
    items: menuItemsArray
  };

  public toggle() {
    let screenWidth = window.screen.width;
    let innerWidth = window.innerWidth;
    if(screenWidth<maxScreenWidthForNavPanel || innerWidth<maxScreenWidthForNavPanel ){
      this.setState((prevState) => {
        return {
          isNavPanelOpen: !prevState.isNavPanelOpen
        }
      });
    }
  }

  render(){
    const { isNavPanelOpen } = this.state;
    const { items } = this.state;
    return(
      <div className="Navbar-Component">
        <NavPanel isOpen={isNavPanelOpen}/>
        <PiXIcon toggleNavPanel={this.toggle}/>
        <Caret isOpen={isNavPanelOpen}/>
        <SearchBar/>
        <ul className="menu-navbar">
          <Menu items={items}/>
        </ul>
        <PiXChatIcon/>
      </div>
    );
  }
}

type MyProps = {
  loggedInPerson: {
    id: string;
    firstName: string;
    lastName: string;
    username: string;
  };
  onLogout: () => any;
};

type Props = MyProps;

type State = {
  isNavPanelOpen: boolean;
  isFeedbackOpen: boolean;
  items: [];
};

export default Navbar;