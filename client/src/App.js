import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Navbar from './components/navigation/Navbar';
// import NameTitle from './components/home/NameTitle';
// import {Container} from 'reactstrap';
// import {store} from "./store";
import Search from './components/navigation/SearchBar';
import EditProfile from './components/ups/EditProfile';
import Landing from "./components/auth/Landing";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Landing></Landing>
          <Route exact path="/" Component={ Landing } />

        </div>
      </Router>
    );
  }
}
export default App;

//ctrl+alt+b = beautify
