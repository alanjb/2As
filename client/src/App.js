import React, {Component} from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NameTitle from './components/NameTitle';
import {Container} from 'reactstrap';
import {store} from "./store";

class App extends Component {
  // state = store.getState();
  render() {
    return (<div className="App">
      <div className="Navbar">
        <Navbar/>
      </div>
      <div className="Body">
        <Container>
          {/* <NameTitle key={1} tech={store.getState().tech}/> */}
          {/* <ButtonGroup key={2} technologies={["React", "Elm", "React-redux"]} /> */}
          <Home/>
        </Container>
      </div>
    </div>);
  }
}
export default App;

//ctrl+alt+b = beautify
