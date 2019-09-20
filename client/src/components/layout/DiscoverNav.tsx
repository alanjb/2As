import React from 'react';
import PiXIcon from '../../components/assets/PiXIcon';
import PiXChatBlack from '../../components/assets/PiXChatBlack';
import PiXMail from '../../components/assets/Mail';
import indexButton from '../../assets/index2svg-01.svg';
import Search from '../../components/assets/SearchButton';
import SearchButton from '../../components/assets/SearchButton';


const { getMenuItems }= require('../../config/ConfigFunctions');
const menu = getMenuItems();
const menuItemsArray = menu.menu.items;

class DiscoverNav extends React.Component {
  constructor(props: any){
    super(props);
  }
  
  render(){
    
    return(
      <div className="DiscoverNav-Component">
        <div>
          <img className="index-button" src={indexButton} alt="index-button"/>
        </div>

        <PiXIcon/>
        <div className="discover-toolbar">
          <PiXChatBlack/>
          <PiXMail/>
        </div>
      </div>
    );
  }
}

export default DiscoverNav;