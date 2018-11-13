import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 } from 'reactstrap';
 // import SignUp from './components/SignUp';
import Logo from '../components/Logo';
import Eye from '../components/Eye';
import SignUpLink from './SignUpLink';
import { Link } from 'react-router-dom';
import MainSearchBar from '../components/MainSearchBar';

const placeholderText = 'try ';

export default class Example extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isOpen: false,
      isButtonClicked: false,
      placeholder: ""
    }
  }

  componentWillMount() {
    // generate new city to display in search bar
    window.onload = () => {
      const skills = ['"iphone repair"', '"tomato gardening"'];
      const randomSkill = Math.floor(Math.random() * skills.length);
      this.setState({
        placeholder: placeholderText + skills[randomSkill],
      });
    };
  }


  handleClick(e){
    // alert("TESTTTT");
    let currentState = !this.state.isButtonClicked;

    this.setState({
      isButtonClicked: !this.state.isButtonClicked
    });

    if(currentState === true){
       // sidebar.style.display = 'block';

    }
    else{
      // sidebar.style.display = 'block';
    }
    // console.log(!this.state.isButtonClicked);

  }

  toggle() {
    this.setState({
      isOpen: !this.state.isButtonClicked
    });
  }

  render() {
    return (
      <div>
        <Navbar className="Main-Navbar" color="light" light expand="md">
          <NavbarBrand><Logo /><Link to="/"></Link></NavbarBrand>
          <NavbarBrand><Eye/></NavbarBrand>




           <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink className="nav-link"><Link to="/browse">browse</Link></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink><Link to="/startatrade">start a trade</Link></NavLink>
                </NavItem>
              </Nav>
              <Nav className="ml-auto" navbar>
                <MainSearchBar placeholder={this.state.placeholder} />
              </Nav>
              <Nav className="ml-auto" navbar>

                  <SignUpLink clickHandler={this.handleClick}> </SignUpLink>
                <NavItem>
                  <NavLink><Link to="/profile">profile</Link></NavLink>
                </NavItem>
              </Nav>
            </Collapse>
        </Navbar>
      </div>
    );
  }
}
