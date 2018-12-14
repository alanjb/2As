import React from 'react';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  CardSubtitle,
  Row,
  Col,
  CardBody
} from 'reactstrap';
import {Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import classnames from 'classnames';
import {Container} from 'reactstrap';
import {InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';
import Tag from './Tag';

//

export default class SkillForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleDescripitionChange = this.handleDescripitionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);

    // skills array updated here everytime the add to cart button is clicked
    this.state = {
      //componentDidUpdate effects this because the skill array is adding or deleting for itself
      skills: []
      // description: '',
      // selectedOption: 'justOnce'
    }
  }

  handleOptionChange(event) {
    this.setState({selectedOption: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log('adding to cart');
    // create new item obbject for the submitted form
    //

    let newSkillObject = {
      description: this.state.description,
      time: this.state.selectedOption
    }
  }

  render() {
    return (<div className="SkillForm-Component">
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <CardTitle>search or select a skill category</CardTitle>
        </FormGroup>
        <FormGroup>
          <InputGroup>
            {/* <InputGroupAddon addonType="prepend">@</InputGroupAddon> */}
            <Input placeholder="try 'gardening' "/>
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <CardSubtitle>search results</CardSubtitle>
          {/* <Tag />
            <Tag /> */
          }
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
        {/* <FormGroup>
            <Button color="warning">create new skill</Button>
          </FormGroup> */
        }

        <FormGroup>
          <CardSubtitle>specify how long you need this skill</CardSubtitle>
        </FormGroup>

        <FormGroup check="check">
          <Label check="check">
            <Input type="radio" name="justOnce" value="justOnce" checked={this.state.selectedOption === "justOnce"} onChange={this.handleOptionChange}/>{' '}
            just once
          </Label>
        </FormGroup>

        <FormGroup check="check">
          <Label check="check">
            <Input type="radio" name="permanently" value="permanently" checked={this.state.selectedOption === "permanently"} onChange={this.handleOptionChange}/>{' '}
            permanently
          </Label>
        </FormGroup>

        <FormGroup>
          <CardSubtitle>describe what you need from this skill</CardSubtitle>
        </FormGroup>
        <FormGroup>
          <Input text="text" type="textarea" name="text" id="exampleText" value={this.state.description} onChange={this.handleDescripitionChange}/>
        </FormGroup>
        <FormGroup>
          <Button type="submit" color="success" value="Submit">add to cart</Button>
          {/* <Button color="danger" onClick={this.toggle}>cancel</Button> */}
        </FormGroup>
      </Form>
    </div>)
  }

  componentDidMount(){
    handleOptionChange(event) {
      this.setState({selectedOption: event.target.value});
    }
  }

  componentDidUpdate(prevState, prevProps, snapshot){

  }

} //END COMPONENT
