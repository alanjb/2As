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
  DropdownItem,
 } from 'reactstrap';
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
    // this.handleClick = this.handleClick.bind(this);
    this.state = {
      isClosed: true,
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


  // handleClick(e){
  //   // alert("TESTTTT");
  //   let currentState = !this.state.isButtonClicked;
  //
  //   this.setState({
  //     isButtonClicked: !this.state.isButtonClicked
  //   });
  //
  //   if(currentState === true){
  //      // sidebar.style.display = 'block';
  //
  //   }
  //   else{
  //     // sidebar.style.display = 'block';
  //   }
  //   // console.log(!this.state.isButtonClicked);
  //
  // }

  toggle() {
    this.setState({
      // isOpen: !this.state.isOpen,
      isClosed: !this.state.isClosed,
    });

    // set the current state of the sidebar into variable
    const currentState = this.state.isClosed;
    const sidebar = document.getElementById('sidebar');

    if (currentState === true) {
      console.log('Sidebar is Open');
      sidebar.style.top = '65px';
      // sidebar.style.display = 'block';
      sidebar.style.visibility = 'visible';
    } else {
      console.log('Sidebar is Closed');
      sidebar.style.top = '-600px';
      // sidebar.style.display = 'none';
      sidebar.style.visibility = 'hidden';
    }
  }

  render() {
    return (
      <div>
        <Navbar className="Main-Navbar" id="navbar" color="light" light expand="md">
           <NavbarToggler onClick={this.toggle} />
          <NavbarBrand><Link to="/"><Logo /></Link></NavbarBrand>
          {/* <NavbarBrand><Eye/></NavbarBrand> */}


            <Collapse navbar>
              <Nav className="ml-auto" navbar>

                <NavItem>
                  <NavLink className="nav-link"><Link to="/browse">browse</Link></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink><Link to="/startatrade">start a trade</Link></NavLink>
                </NavItem>
                <NavItem>
                  <MainSearchBar placeholder={this.state.placeholder} />
                </NavItem>
                {/* <NavItem>
                  <SignUpLink clickHandler={this.handleClick}> </SignUpLink>
                </NavItem> */}
                <NavItem>
                  <NavLink><Link to="/profile">profile</Link></NavLink>
                </NavItem>

                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      profile
                    </DropdownItem>
                    <DropdownItem>
                      invite friends
                    </DropdownItem>
                    <DropdownItem>
                      settings
                    </DropdownItem>
                    <DropdownItem>
                      privacy & security
                    </DropdownItem>
                    <DropdownItem>
                      log out
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
        </Navbar>
      </div>
    );
  }
}
