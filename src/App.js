import React, { Component } from 'react';

// import route Components here
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';

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
            <div className="primary-layout">
              <Navbar />


              <main>
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route onClick="" path="/" component={Signup} />
                  <Route path="/" component={Login} />
                </Switch>
              </main>
          </div>
        </div>

    );
  }
}
export default App;
