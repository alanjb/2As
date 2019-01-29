import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import classnames from 'classnames';

export default class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

    handleSignUpSumbit(e){
      //need to gather user information by creating a userProfile object


    }

  render() {
    return (
      <div className="">
        <FormGroup>
          <Label for="exampleUsername">Username</Label>
          <Input type="username" name="username" id="exampleEmail" placeholder="Enter a username" />

          <Label for="exampleEmail">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Enter your password" />

          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Enter your email" />

          <Button color="primary" onClick={this.handleSignUpSumbit}>Sign Up</Button>
          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
        </FormGroup>
      </div>
    );
  }
}
