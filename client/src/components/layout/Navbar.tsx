import React from 'react';
import PiXIcon from '../../components/assets/PiXIcon';
import SearchBar from '../layout/SearchBar';
import Caret from '../assets/Caret';
import PiXChatIcon from '../../components/assets/PiXChatIcon';

interface IProps {
  isSidePanelOpen: boolean
}

export default class Navbar extends React.Component<IProps,{}>{
  constructor(props: any){
    super(props);
  }

  render(){
    return(
        <header className="Navbar" role="banner">
          <div className="Navbar-Component">
            <nav className="navigation-area" id="navigation">
              <div className="navigation-logo">
                <PiXIcon/>
              </div>
              <div className="navigation-caret">
                <Caret isSidePanelOpen={this.props.isSidePanelOpen}/>
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
  );
}
}
