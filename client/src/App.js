import * as React from 'react';
import Register from './components/auth/Register';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Routes from './components/routing/Routes';
import Discover from './components/discover/Discover';
import DiscoverNav from './components/layout/DiscoverNav';
import Navbar from './components/layout/Navbar';
import Article from './components/articles/Article';

class App extends React.Component {
  render(){
    return(
    <React.Fragment>
      <Navbar/>
      {/* <DiscoverNav/> */}
      <div className="app-body">
        <Article/>
        {/* <Discover/> */}
      </div>
    </React.Fragment>
    );  
  }
}
export default App;