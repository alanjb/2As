import React, { Component } from 'react';

// import route Components here
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import SignInUp from './components/SignInUp';

import {
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <div className="App">
              <Navbar />
              <SignInUp />
              <main>
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/" exact component={Profile} />
                  {/* <Route onClick="" path="/" component={Signup} />
                  <Route path="/" component={Login} /> */}
                </Switch>
              </main>
          </div>
    );
  }
}
export default App;
