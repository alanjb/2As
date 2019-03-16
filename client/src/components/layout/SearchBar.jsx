import React from 'react';
import {
  Container,
  Navbar,
  Row,
  Col
 } from 'reactstrap';
import { InputGroup, Input } from 'reactstrap';
const placeholderText = 'try ';

export default class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      placeholder: ""
    }
  }

  componentWillMount() {
    // generate new city to display in search bar
    window.onload = () => {
      const skills = ['"iphone repair"', '"graphic design"'];
      const randomSkill = Math.floor(Math.random() * skills.length);
      this.setState({
        placeholder: placeholderText + skills[randomSkill],
      });
    };
  }

  render() {
    return (
      <div>
        <Navbar className="search" id="navbar" color="light" light expand="md">
        <Container>
          <Row>
            <Col sm="4">
              <InputGroup>
                  <Input className="searchbox" placeholder="Search" type="text" step="1" />
              </InputGroup>
            </Col>
          </Row>
      </Container>
    </Navbar>
      </div>
    )
  }
}
