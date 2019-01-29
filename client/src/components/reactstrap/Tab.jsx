import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import classnames from 'classnames';
import SignUpForm from '../components/forms/SignUpForm';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  handleSignUpSumbit(e){
    //need to gather user information by creating a userProfile object


  }

  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              //className is a prop
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Log in
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Sign Up
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                {/* <h4>Tab 1 Contents</h4> */}
                <FormGroup>
                  <Label htmlFor="email" for="exampleEmail">Email</Label>
                  <Input type="email" name="email" id="exampleEmail" placeholder="Enter your email" />
                  <Label for="exampleEmail">Password</Label>
                  <Input type="password" name="password" id="examplePassword" placeholder="Enter your password" />

                  <Button color="primary" type="submit" onClick={this.handleFormSubmit}>Log In</Button>{' '}
                  <Button color="secondary" onClick={this.toggle}>Cancel</Button>
               </FormGroup>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                {/* <h4>Tab 1 Contents</h4> */}
                <SignUpForm />
                
            </Col>

            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
