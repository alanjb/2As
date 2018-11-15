import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText,CardSubtitle, Row, Col, CardBody, } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import classnames from 'classnames';
import { Container } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';


export default class StartATrade extends React.Component {
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
      <div className="StartATrade-Component">
        <Card>
          <Container>
            <CardBody>
              <Form onSubmit={this.onSubmit}>
                <FormGroup>
                  <CardTitle>start a trade</CardTitle>
                  <CardSubtitle>put together a trade and find someone to trade with</CardSubtitle>
                </FormGroup>
                <FormGroup>
                  <Button color="primary" onClick={this.handleSignUpSumbit}>add skill</Button>
                  <Button color="danger" onClick={this.handleSignUpSumbit}>add item</Button>
                  <Button color="warning" onClick={this.handleSignUpSumbit}>add cryptocurrency</Button>
                </FormGroup>
                <FormGroup>
                  <CardTitle>search or select a skill category</CardTitle>
                </FormGroup>
                  <FormGroup>
                    <InputGroup>
                      {/* <InputGroupAddon addonType="prepend">@</InputGroupAddon> */}
                      <Input placeholder="try 'gardening' " />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <CardSubtitle>search results</CardSubtitle>
                    <hr/>
                  </FormGroup>
                  <FormGroup>
                    <CardSubtitle>popular</CardSubtitle>
                    <hr/>
                  </FormGroup>
                  <FormGroup>
                    <CardSubtitle>recently viewed</CardSubtitle>
                    <hr/>
                  </FormGroup>
                  <FormGroup>
                    <Button color="warning" onClick={this.handleSignUpSumbit}>create new skill</Button>
                  </FormGroup>

                  <FormGroup>
                      <CardSubtitle>specify how long you need this skill</CardSubtitle>
                  </FormGroup>
                  <FormGroup>
                    <Button color="secondary" onClick={this.handleSignUpSumbit}>just once</Button>
                    <Button color="secondary" onClick={this.handleSignUpSumbit}>permanently</Button>
                    <Button color="secondary" onClick={this.handleSignUpSumbit}>custom</Button>
                  </FormGroup>
                  <FormGroup>
                      <CardSubtitle>describe what you need from this skill</CardSubtitle>
                  </FormGroup>
                  <FormGroup>
                      <Input type="textarea" name="text" id="exampleText" />
                  </FormGroup>

                  <FormGroup>
                    <Button color="success" onClick={this.handleSignUpSumbit}>add to cart</Button>
                    <Button color="danger" onClick={this.toggle}>Cancel</Button>
                  </FormGroup>
              </Form>
            </CardBody>
          </Container>
        </Card>
      </div>
    );
  }
}
