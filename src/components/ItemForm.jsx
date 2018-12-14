import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText,CardSubtitle, Row, Col, CardBody, } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import classnames from 'classnames';
import { Container } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

export default class ItemForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return (
      <Form>
        <FormGroup>
          <CardTitle>search or select a item category</CardTitle>
        </FormGroup>
          <FormGroup>
            <InputGroup>
              {/* <InputGroupAddon addonType="prepend">@</InputGroupAddon> */}
              <Input placeholder="try 'electric guitar' " />
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
              <CardSubtitle>describe what you need from this item</CardSubtitle>
          </FormGroup>
          <FormGroup>
              <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>

          <FormGroup>
            <Button color="success" onClick={this.handleSignUpSumbit}>add to cart</Button>
            <Button color="danger" onClick={this.toggle}>Cancel</Button>
          </FormGroup>
      </Form>

    )
  }
}
