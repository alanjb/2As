import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import { Link } from 'react-router-dom';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isOpen: false,
      buttonClicked: false
    };
  }

  handleClick(event)
    if(event.)

    this.setState(
      {
        buttonClicked: !this.state.ButtonClicked;
      }
    )
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
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

                <NavItem>
                  <button onCLick={this.handleClick}>
                    <NavLink onCLick={this.handleClick}><Link to="/login" onCLick={this.handleClick}> Log in </Link></NavLink>
                  </button>
                </NavItem>

                <NavItem>
                  <NavLink><Link to="/signup">Sign up</Link></NavLink>
                </NavItem>

              </Nav>
            </Collapse>
        </Navbar>
      </div>
    );
  }
}
