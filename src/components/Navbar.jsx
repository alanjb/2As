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

import SignUpLink from './SignUpLink';
import { Link } from 'react-router-dom';

export default class Example extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isOpen: false,
      isButtonClicked: false
    }
  }

  handleClick(e){
    alert("TESTTTT");
    this.setState({
      isButtonClicked: !this.state.isButtonClicked
    });
    console.log(!this.state.isButtonClicked);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isButtonClicked
    });
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand><Link to="/">zas</Link></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                    <SignUpLink clickHandler={this.handleClick}> </SignUpLink>
                <NavItem>
                  <NavLink><Link to="/profile">Profile</Link></NavLink>
                </NavItem>
              </Nav>
            </Collapse>
        </Navbar>
      </div>
    );
  }
}
