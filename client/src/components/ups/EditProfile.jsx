import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import classnames from 'classnames';
import { Container } from 'reactstrap';

export default class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    // this.onChange = this.bind.onChange(this);
    // this.onSubmit = this.bind.onSubmit(this);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    }


  }

  render() {
    return (
      <div className="">
        <Container>
          <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for="exampleUsername">Username</Label>
            <Input type="username" name="username" id="username" value={this.state.username} onChange={this.onChange} placeholder="Enter a username please" />

            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" value={this.state.email} onChange={this.onChange} placeholder="Enter your email" />

            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" value={this.state.password} onChange={this.onChange} placeholder="Enter a password" />

            <Label for="examplePassword">Confirm Password</Label>
            <Input type="password" name="password" id="examplePassword1" value={this.state.confirmPassword} onChange={this.onChange} placeholder="Confirm above password" />

            <Button color="primary" onClick={this.handleSignUpSumbit}>Sign Up</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </FormGroup>
          </Form>
        </Container>
      </div>
    );
  }
}

// EditProfile.propTypes = {
//   name: PropTypes.string
// };
