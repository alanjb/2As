import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import classnames from 'classnames';
import { Container } from 'reactstrap';

export default class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
      },
      loading: false,
      errors: {} // when we pass errors into setState, the new error object will replace the old one in the state object
    };
  }

  onChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  }

  onSubmit = (e) => {
    //alert('submit button clicked');
    // creating an errors object that will be asigned the return value of the validate function (of this object)
    const errors = this.validate(this.state.data, e);
    // // when we pass errors into setState, the new error object will replace the old one in the state object
    this.setState({ errors });
  }

  validate = (data, e) => {
    const errors = {};
    if(data.username === "" || !data.username || data.username.length <10) {
      errors.username = "USERNAME Input is blank. Username length: " + data.username.length;
      alert(errors.username);
      e.preventDefault();

    }

    else if(data.username === "" || !data.username){
      errors.password = "PASSWORD Input is blank. Password length: " + data.password.length;
      alert(errors.password);
      e.preventDefault();
    }

    else{
      alert("good to go");
    }

    return errors;

  }

  render() {
    const { data } = this.state;
    return (
      <div className="">
        <Container>
          <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for="exampleUsername">Username</Label>
            <Input type="username" name="username" id="username" value={this.state.data.username} onChange={this.onChange} placeholder="Enter a username please" />

            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" value={this.state.data.email} onChange={this.onChange} placeholder="Enter your email" />

            <Label for="exampleEmail">Password</Label>
            <Input type="password" name="password" id="examplePassword" value={this.state.data.password} onChange={this.onChange} placeholder="Enter a password" />

            <Label for="exampleEmail">Confirm Password</Label>
            <Input type="password" name="password" id="examplePassword" value={this.state.data.password} onChange={this.onChange} placeholder="Confirm above password" />



            <Button color="primary" onClick={this.handleSignUpSumbit}>Sign Up</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </FormGroup>
          </Form>
        </Container>
      </div>
    );
  }
}
