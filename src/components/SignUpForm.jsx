import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import classnames from 'classnames';
import { Container } from 'reactstrap';

export default class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    // this.onChange = this.bind.onChange(this);
    // this.onSubmit = this.bind.onSubmit(this);
    this.state = {

    }
  }

  render() {
    return (
      <div className="">
        <Container>
          <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for="exampleUsername">Username</Label>
            <Input type="username" name="username" id="username" value={this.state.data.username} onChange={this.onChange} placeholder="Enter a username please" />

            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" value={this.state.data.email} onChange={this.onChange} placeholder="Enter your email" />

            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" value={this.state.data.password} onChange={this.onChange} placeholder="Enter a password" />

            <Label for="examplePassword">Confirm Password</Label>
            <Input type="password" name="password" id="examplePassword1" value={this.state.data.confirmPassword} onChange={this.onChange} placeholder="Confirm above password" />

            <Button color="primary" onClick={this.handleSignUpSumbit}>Sign Up</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </FormGroup>
          </Form>
        </Container>
      </div>
    );
  }
}
