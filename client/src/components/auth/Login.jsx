import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import classnames from 'classnames';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }

  render() {
    return (
      <div className="">
        <Container>
          <Form onSubmit={this.onSubmit}>
            <Link to="/">
              <Button> back </Button>
            </Link>
          <h1>Log in to zas</h1>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" value={this.state.email} onChange={this.onChange} placeholder="Enter your email" />

            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" value={this.state.password} onChange={this.onChange} placeholder="Enter a password" />

            <Button color="primary" onClick={this.handleSignUpSumbit}>Login</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </FormGroup>
          </Form>
        </Container>
      </div>
    );
  }
}
