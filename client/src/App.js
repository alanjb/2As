import * as React from 'react';
import Register from './components/auth/Register';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Routes from './components/routing/Routes';
import Home from './components/layout/Home';
import Navbar from './components/layout/Navbar';
import Article from './components/articles/Article';

// Redux
import store from './store';
// import { loadUser } from './actions/auth';
// import setAuthToken from './utils/setAuthToken';

class App extends React.Component {
  render(){
    return(
      <Provider store={store}>
        <Router>
          <React.Fragment>
            {/* <div className="app-navigation">
              <Navbar />
            </div> */}
            {/* <div className="container-fluid h-100 app-body">  */}
              <Register/>
              {/* <Article/> */}
            {/* </div> */}
            <Switch>
              <Route exact path='/' component={Home} />
              {/* <Route component={Routes} /> */}
          </Switch>
        </React.Fragment>
      </Router>
    </Provider>
    );  
  }
}

export default App;