import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText,CardSubtitle, Row, Col, CardBody, } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import classnames from 'classnames';
import { Container } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';


export default class StartATrade extends React.Component {
  constructor(props) {
    super(props);
    // this.showSkillForm = this.showSkillForm.bind(this);
    this.state = {
      trade: {
        name: "",
        numSkills: 0,
        numItems: 0,
        numCryptos: 0,
      },
      thingsInTrade: [],
      loading: false,
      skillButton: {
        isClicked: false,

      }
      // errors: {
      //
      // } // when we pass errors into setState, the new error object will replace the old one in the state object
    };
    // alert('skill clicked');
  }

  submitButtonClicked = (event) => {
      console.log('Sumbit Button');
      // sidebar.style.top = '65px';
      // sidebar.style.display = 'block';
      sidebar.style.visibility = 'visible';
  }

  // showSkillForm = () => {
  //   alert('Skill Button Clicked');
  // }
  //
  // showItemForm = () => {
  //   alert('Item Buttonm Clicked');
  // }
  //
  // showCryptoForm = () => {
  //   alert('Crypto Button Clicked');
  // }

    // this.setState({
    //
    //   //data: { ...this.state.data, [event.target.name]: event.target.value }
    // });
    // alert(event.target.name);


// DEFAULT IS Add Skill Form
  render() {
    const { trade } = this.state;
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
                    {/* <button id="1" onClick="reply_click(this.id)">B1</button> */}
                    <Button name="skillButton" id="skillButton" className="Button-Component"  color="primary" onClick={this.submitButtonClicked}>add skill</Button>
                    <Button name="itemButton" color="danger" onClick={this.tradeButtonsClicked}>add item</Button>
                    <Button name="cryptoButton" color="warning" onClick={this.tradeButtonsClicked}>add cryptocurrency</Button>
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
