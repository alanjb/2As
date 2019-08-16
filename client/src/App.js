import * as React from 'react';
import Navbar from './components/layout/Navbar';
import Article from './components/layout/Article';

class App extends React.Component {
  render(){
    return(
      <div className="">
        <div className="app-navigation">
        <Navbar/>
        </div>
        <div className="container-fluid h-100 app-body"> 
          <Article/>
        </div>
      </div>
    );  
  }
}

export default App;