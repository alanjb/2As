import * as React from 'react';
import Register from './components/auth/Register';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Routes from './components/routing/Routes';
import Home from './components/layout/Home';
import Navbar from './components/layout/Navbar';
import Article from './components/articles/Article';
import IndexSidePanel from './components/articles/IndexSidePanel';
import IndexButton from './components/assets/IndexButton';

class App extends React.Component {
  render(){
    return(
    <React.Fragment>
      <Navbar/>
      <div className="app-body">
        <div className="article-container">
          <Article/> 
        </div>
      </div>
    </React.Fragment>
    );  
  }
}
export default App;