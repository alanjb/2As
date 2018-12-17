import React from 'react';
import {Button, CardTitle, CardSubtitle} from 'reactstrap';
import {Form, FormGroup, Label, Input} from 'reactstrap';
import {InputGroup} from 'reactstrap';
import Tag from './Tag';

export default class SkillsStore extends React.Component {
  constructor(props) {
    super(props);
    this.handleDescripitionChange = this.handleDescripitionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);

    // skills array updated here everytime the add to cart button is clicked
    this.state = {
      skills: [],
      description: '',
      selectedOption: 'justOnce'
    }

    this.skills = [];
  }

  componentWillMount() {
    // console.log("WILL MOUNT");
  }

  render() {
    // console.log("HAS RENDERED");
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
          <Input text="text" type="textarea" name="text" id="description" value={this.state.description} onChange={this.handleDescripitionChange}/>
        </FormGroup>
        <FormGroup>
          <Button type="submit" color="success" value="Submit">add to cart</Button>
          {/* <Button color="danger" onClick={this.toggle}>cancel</Button> */}
        </FormGroup>
      </Form>
    </div>)
  }

  handleOptionChange(event) {
    this.setState({selectedOption: event.target.value});
    // console.log('selectedOption change');
  }

  handleDescripitionChange(event) {
    this.setState({description: event.target.value});
    // console.log('description changed to: ' + this.state.description);
  }

  handleSubmit(event) {
    event.preventDefault();
    // console.log('Click');
    const skillObject = createSkill(this.state.description, this.state.selectedOption);
    // console.log("this skills description: " + skillObject.description);
    //update local state of SkillsStore for skills array
    this.skills.push(skillObject);
    this.setState(prevState => ({
      skills: [
        ...prevState.skills,
        skillObject
      ]
    }));
    //callback up to SkillStore component in Trade parent to update parent skills array state
    // console.log(this.state.skills);
    // this.props.handleSkills(this.state.skills);
    this.props.handleSkills(skillObject);

  } //end handleSubmit

  componentDidUpdate(prevState, prevProps, snapshot) {
    console.log("SKILLSTORE ARRAY: ");
    console.log(this.skills);
  }

} //END COMPONENT

// SkillsStore.propTypes = {
//   description: React.PropTypes.string,
// };

//skill factory function
function createSkill(des, length) {
  return {description: des, lengthOfTime: length}
}
