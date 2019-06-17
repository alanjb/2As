import React from 'react';
import PiXIcon from '../../components/assets/PiXIcon';
import SearchBar from '../layout/SearchBar';
import NavPanel from '../layout/NavPanel';
import Caret from '../assets/Caret';
import PiXChatIcon from '../../components/assets/PiXChatIcon';

class Navbar extends React.Component<MyProps, State> {
  constructor(props: any){
    super(props);
    this.toggle = this.toggle.bind(this);
  }

  state: State = {
    isNavPanelOpen: false,
    isFeedbackOpen: false
  };

  public toggle() {
    let screenWidth = window.screen.width;
    let innerWidth = window.innerWidth;
    if(screenWidth<1200 || innerWidth<1200){
      this.setState((prevState) => {
        return {
          isNavPanelOpen: !prevState.isNavPanelOpen
        }
      });
    }
  }

  public toggleFeedBack = () => {
    this.setState((prevState) => { 
      isFeedbackOpen: !prevState.isFeedbackOpen 
    });
  };

  render(){
    const { isNavPanelOpen } = this.state;
    return(
      <div className="Navbar-Component">
        <NavPanel isOpen={isNavPanelOpen}/>
        <PiXIcon toggleNavPanel={this.toggle}/>
        <Caret isOpen={isNavPanelOpen}/>
        <SearchBar/>
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
  unreadMailCount: number;
  onLogout: () => any;
};

type Props = MyProps;

type State = {
  isNavPanelOpen: boolean;
  isFeedbackOpen: boolean;
};

export default Navbar;