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
        <button onClick={this.props.clickHandler}>Sign In</button>
        <button onClick={this.props.clickHandler}>Sign Up</button>
      </React.Fragment>
    );
  }
}
