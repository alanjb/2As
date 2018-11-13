import React, { Component } from 'react';

// import route Components here
import Home from './components/Home';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import SignInUp from './components/SignInUp';
import NameTitle from './components/NameTitle';
import { Container, Row, Col } from 'reactstrap';
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
          <div className="Navbar">
            <Navbar />
          </div>
          <div className="Body">
            <Container>
              <Home />
            </Container>
          </div>
        </div>
    );
  }
}
export default App;
