import * as React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import SidePanel from './components/layout/SidePanel';
import Home from './components/layout/Home';
import Article from './components/layout/Article';
import Context from './config/Context';

interface IState{
  isSidePanelOpen: boolean
}

export default class App extends React.Component<{}, IState> {
  state = {
    isSidePanelOpen: false
  }

  toggleSidePanel = () => {
    this.setState((prevState: any) => {
      return {
        isSidePanelOpen: !prevState.isSidePanelOpen
      }
    });
  }

  render() {
    return (
      <Context.Provider value={{
        isSidePanelOpen: this.state.isSidePanelOpen,
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
          </div>
          <div className="body">
            <Article/>
          </div>
        </div>
      </Context.Provider>
    );
  }
}
