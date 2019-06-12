import * as React from 'react';
// import styled from ‘styled-components’;
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import SidePanel from './components/layout/SidePanel';
import Article from './components/layout/Article';
// import InviteNewUser from './components/layout/InviteNewUser';
import Context from './config/Context';
// import PortalInviteModal from './components/layout/PortalInviteModal';
// import ArticleDetails from './components/layout/ArticleDetails';


// interface IState{
//   isSidePanelOpen: boolean,
//   isAddToPortalModalOpen: boolean,
// }

class App extends React.Component {
  state = {
    isSidePanelOpen: false,
    isAddToPortalModalOpen: false
  }

  toggleSidePanel = () => {
    let screenWidth = window.screen.width;
    let innerWidth = window.innerWidth;
    if(screenWidth<1200 || innerWidth<1200){
      this.setState((prevState) => {
        return {
          isSidePanelOpen: !prevState.isSidePanelOpen
        }
      });
    }
    else{
      window.location.href = '/';
    }
  }

  toggleInviteToPortalModal = () => {
    this.setState((prevState) => {
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
            {/* <Route exact path="/" component={Home}/> */}
            <Route exact path="/article" component={Article}/>
          </Switch>
        </Router>
        <div className="container-fluid h-100">
          <Navbar isSidePanelOpen={this.state.isSidePanelOpen}/>
          <SidePanel isOpen={this.state.isSidePanelOpen}/>
          <div className={bodyClasses}>
            <Article/>
            {/* <InviteNewUser isAddToPortalModalOpen={this.state.isAddToPortalModalOpen}/> */}
          </div>
            {/* <PortalInviteModal isOpen={this.state.isAddToPortalModalOpen}/> */}
          </div>
      </Context.Provider>
    );
  }
}

export default App;
