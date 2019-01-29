/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import SignForm from './components/SignForm';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
// import Signup from './components/SignUp';

export default class SignUpLink extends React.Component{
  render(){
    return (
      <React.Fragment>
        <Button onClick={this.props.clickHandler}>Sign In</Button>
        <Button onClick={this.props.clickHandler}>Sign Up</Button>
      </React.Fragment>
    );
  }
}
