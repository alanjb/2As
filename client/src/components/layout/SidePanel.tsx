import React, {Component, createRef} from 'react';

interface IProps{
  isOpen: boolean
}

const SidePanel = (props: any) => {
  // private sidePanelRef: React.RefObject<HTMLDivElement>;

    let sidePanelClasses = 'navigation-sidepanel';
    const {isOpen} = props;
    if(isOpen){
      sidePanelClasses = 'navigation-sidepanel open';
    }
    else{
      sidePanelClasses = 'navigation-sidepanel '
    }

    return(
      <React.Fragment>
        <header className="SidePanel">
          <div className="SidePanel-Component">
            <nav className={sidePanelClasses} id="navigation-sidepanel">
              <div className="navigation-sidepanel-items">
                <ul>
                  <li><a href="/html/">Home</a> </li>
                  <li><a href="/html/">Communities</a> </li>
                  <li><a href="/html/">Portals</a></li>
                  <li><a href="/html/">RFIs</a></li>
                  <li><a href="/html/">Invite New User</a></li>
                  <li><a href="/html/">External Applications</a></li>
                  <li><a href="/html/">Email</a></li>
                  <li><a href="/html/">Profile</a></li>
                  <li><a href="/html/">Help</a></li>
                  <li><a href="/html/">Send Feedback</a></li>
                  <li><a href="/html/">Sign Out</a></li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
      </React.Fragment>
    );
  }

export default SidePanel;
