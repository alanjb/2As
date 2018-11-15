import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText,CardSubtitle, Row, Col, CardBody, } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import classnames from 'classnames';
import { Container } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

export default class TradeCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      trade: {
        numSkills: 0,
        numItems: "",
        numCryptos: ""
      },
      loading: false,
      errors: {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
      } // when we pass errors into setState, the new error object will replace the old one in the state object
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

  // validate = (data, e) => {
  //   const errors = {};
  //   if(data.username.length<1){
  //     errors.password = "PASSWORD Input is blank. Password length: " + data.password.length;
  //     alert(errors.password);
  //     e.preventDefault();
  //   }
  //   else if(data.username === "" || !data.username) {
  //     errors.username = "USERNAME Input is blank. Username length: " + data.username.length + ", " + data.password.length;
  //     alert(errors.username);
  //     e.preventDefault();
  //   }
  //
  //   return errors;
  // }

  render() {
    // const { data } = this.state;
    return (
      <div className="TradeCart-Component">
        <Card>
          <Container>
            <CardBody>
              <Form onSubmit={this.onSubmit}>
                <FormGroup>
                  <CardTitle>trade cart</CardTitle>
                </FormGroup>
                  <FormGroup>
                    {/* array map trade objects here*/}
                  </FormGroup>
                  <FormGroup>
                    <Button color="success" onClick={this.handleSignUpSumbit}>Go!</Button>
                  </FormGroup>
              </Form>
            </CardBody>
          </Container>
        </Card>
      </div>
    );
  }
}
