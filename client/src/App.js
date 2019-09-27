import * as React from 'react';
// import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Routes from './components/routing/Routes';
import Discover from './components/discover/Discover';
import Navbar from './components/layout/Navbar';
import Article from './components/articles/Article';
import InviteNewUser from './components/invite/InviteNewUser';

class App extends React.Component {
  state = {
    
  };

  render(){
    return(
    <Router>
      <React.Fragment>
        <Navbar/>
        <div className="app-body">
          <Switch>
            <Route path="/article" component={Article} />
            <Route exact path="/" component={Discover} />    
            <Route path="/invitations/invite" component={InviteNewUser} />    
          </Switch>
        </div>
      </React.Fragment>
    </Router>
    );  
  }
}

export default App;