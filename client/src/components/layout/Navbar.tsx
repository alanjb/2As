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
          <PiXIcon/>
          <Caret isSidePanelOpen={this.props.isSidePanelOpen}/>
          <SearchBar/>
          <PiXChatIcon/>

        </div>
      </header>
    );
  }
}
