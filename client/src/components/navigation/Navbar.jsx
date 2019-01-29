import React from 'react';
import {
  Button,
  Container,
  Navbar,
  NavbarBrand,
  Row,
  Col
 } from 'reactstrap';
import Logo from '../../components/svgs/Logo';
import { Link } from 'react-router-dom';
import Caret from '../../components/svgs/Caret';
import Eyeball from '../../components/svgs/Eyeball';
import Cart from '../../components/svgs/Cart';

export default class Navigation extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isClosed: true,
      isButtonClicked: false,
    }
  }

  componentWillMount() {

  }

  toggle() {
    this.setState({
      // isOpen: !this.state.isOpen,
      isClosed: !this.state.isClosed,
    });

    // set the current state of the sidebar into variable
    const currentState = this.state.isClosed;
    const sidebar = document.getElementById('sidebar');

    // if (currentState === true) {
    //   console.log('Sidebar is Open');
    //   sidebar.style.top = '65px';
    //   // sidebar.style.display = 'block';
    //   sidebar.style.visibility = 'visible';
    // } else {
    //   console.log('Sidebar is Closed');
    //   sidebar.style.top = '-600px';
    //   // sidebar.style.display = 'none';
    //   sidebar.style.visibility = 'hidden';
    // }
  }

  render() {
    return (
      <div>
        <Navbar className="navigation" id="navbar" color="light" light expand="md">
          <Container>
            <Row>
              <Col sm="4">
                <NavbarBrand><Link to="/"><Logo/></Link></NavbarBrand>
                <Caret onClick={this.toggle}></Caret>
                <Button className="startATrade" color="primary">start a trade</Button>{' '}
                <Eyeball></Eyeball>
                <Cart></Cart>
              </Col>
            </Row>
          </Container>
        </Navbar>
      </div>
    );
  }
}
