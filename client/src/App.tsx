import * as React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import SidePanel from './components/layout/SidePanel';
import Home from './components/layout/Home';
import Article from './components/layout/Article';
import InviteNewUser from './components/layout/InviteNewUser';
import Context from './config/Context';
import PortalInviteModal from './components/layout/PortalInviteModal';

interface IState{
  isSidePanelOpen: boolean,
  isAddToPortalModalOpen: boolean,
}

class App extends React.Component<{}, IState> {
  state = {
    isSidePanelOpen: false,
    isAddToPortalModalOpen: false
  }

  toggleSidePanel = () => {
    let screenWidth = screen.width;
    console.log(screenWidth);
    if(screenWidth<1200){
      this.setState((prevState: any) => {
        return {
          isSidePanelOpen: !prevState.isSidePanelOpen
        }
      });
    }
  }

  toggleInviteToPortalModal = () => {
    this.setState((prevState: any) => {
      return {
        isAddToPortalModalOpen: !prevState.isAddToPortalModalOpen
      }
    });
  }

  render(){
    let bodyClasses = 'body';
    let {isAddToPortalModalOpen} = this.state;
    if(isAddToPortalModalOpen){
      bodyClasses = 'body backdrop-modal';
    }
    else{
      bodyClasses = 'body';
    }
    return (
      <Context.Provider value={{
        toggleInviteToPortalModal: this.toggleInviteToPortalModal,
        isSidePanelOpen: this.state.isSidePanelOpen,
        isAddToPortalModalOpen: this.state.isAddToPortalModalOpen,
        toggleSidePanel: this.toggleSidePanel
      }}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/article" component={Article}/>
          </Switch>
        </Router>
        <div className="app" style={{height: '100%'}}>
          <div className="navigation">
            <Navbar isSidePanelOpen={this.state.isSidePanelOpen}/>
            <SidePanel isOpen={this.state.isSidePanelOpen}/>

          <div className={bodyClasses}>
            <InviteNewUser isAddToPortalModalOpen={this.state.isAddToPortalModalOpen}/>
          </div>
          <PortalInviteModal isOpen={this.state.isAddToPortalModalOpen}/>
          </div>
        </div>
      </Context.Provider>
    );
  }
}

export default App;
