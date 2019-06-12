import React, {Component, createRef} from 'react';
import HomeIcon from '../../components/assets/HomeIcon';


interface IProps{
  isOpen: boolean
}

const SidePanel = (props: any) => {
  // private sidePanelRef: React.RefObject<HTMLDivElement>;
 
  // state = {
  //   isSidePanelOpen: false,
  //   isAddToPortalModalOpen: false
  // }

    let sidePanelClasses = 'navigation-sidepanel';
    const {isOpen} = props;
    if(isOpen){
      sidePanelClasses = 'navigation-sidepanel open';
    }
    else{
      sidePanelClasses = 'navigation-sidepanel '
    }

    return(
        <header className="SidePanel">
          <div className="SidePanel-Component">
            <nav className={sidePanelClasses} id="navigation-sidepanel">
                <ul className="sidepanel-ul">
                  <li className="item">
                    <a href="/html/">Home</a>
                    <a className="item-icon" href="/html/"><HomeIcon/></a>
                  </li>
                  <li className="item">
                    <a href="/html/">Portals</a>
                    <a className="item-icon" href="/html/"><HomeIcon/></a>
                  </li>
                </ul>
            </nav>
          </div>
        </header>
    );
  }

export default SidePanel;
