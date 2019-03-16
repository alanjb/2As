import * as React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import SidePanel from './components/layout/SidePanel';
// import Home from './components/layout/Home';
import Context from './config/Context';

interface IState{
  isSidePanelOpen: boolean
}

class App extends React.Component<{}, IState> {
  state = {
    isSidePanelOpen: false
  }

  toggleSidePanel = () => {
    console.log('click');
    this.setState((prevState: any) => {
      return {
        isSidePanelOpen: !prevState.isSidePanelOpen
      }
    });
  }

  render() {
    // let _sidePanel;
    // if(this.state.isSidePanelOpen){
    //   _sidePanel = <SidePanel isOpen={this.state.isSidePanelOpen}/>
    // }
    return (
      <Context.Provider value={{
        isSidePanelOpen: this.state.isSidePanelOpen,
        toggleSidePanel: this.toggleSidePanel
      }}>
        <Router>
          <Switch>

          </Switch>
        </Router>
        <div className="App" style={{height: '100%'}}>
          <Navbar/>
          <SidePanel isOpen={this.state.isSidePanelOpen}/>
        </div>
      </Context.Provider>
    );
  }
}

export default App;
