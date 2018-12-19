import React from 'react';
import {
  Button,
  CardTitle,
  CardSubtitle,
  Form,
  Label,
  FormGroup,
  CustomInput,
  Input,
  InputGroup
} from 'reactstrap';
import Tag from './Tag';
import {
  AvForm,
  AvField,
  AvGroup,
  AvInput,
  AvFeedback,
  AvRadioGroup,
  AvRadio
} from 'availity-reactstrap-validation';

export default class SkillsStore extends React.Component {
  constructor(props) {
    super(props);
    this.handleDescripitionChange = this.handleDescripitionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    // skills array updated here everytime the add to cart button is clicked
    this.state = {
      count: 0,
      isSkillsFull: false,
      skills: [],
      name: '',
      description: '',
      selectedOption: 'justOnce',
      message: ''
    }
    this.skills = [];
    this.skillsForm = React.createRef();
  }

  componentWillMount() {
    // console.log("WILL MOUNT");
  }

  componentDidMount(){
    // const skillsForm = ReactDOM.findDomNode(this.refs.skillsForm);
    // console.log("Did Mount");

  }

  render() {
    // console.log("HAS RENDERED");
    return (
      <div className="SkillForm-Component">
      <Form onSubmit={this.handleSubmit}>
      <FormGroup>
        <CardTitle>search or select a skill category</CardTitle>
      </FormGroup>
      <FormGroup>
        <InputGroup>
          <Input placeholder="try 'gardening' "/>
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
    </div>
    )
  }//end render

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
    if(this.state.skills.length <= 2) {
      // alert("good to go: " + this.state.count)
      this.setState({
        count: this.state.count + 1
      });
      // use skill name as unique key - there should be no duplicates
      const skillObject = createSkill(this.state.description, this.state.selectedOption, this.state.count);
      Object.freeze(skillObject);
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
      // console.log("its working");
      this.resetSkillForm();
      // console.log(this.refs.skillForm);
      // this.form && this.form.reset();
    } else {
      window.alert("Trade Cart is FULL. Remove some items or submit!");
      // this.resetSkillForm();
      // console.log(this.refs.skillForm);
      // this.form && this.form.reset();
    }
  } //end handleSubmit

  resetSkillForm(){
    this.setState({
      name: '',
      description: ""
    })
  }

  componentDidUpdate(prevState, prevProps, snapshot) {
    // console.log("SKILLSTORE ARRAY: ");
    // console.log(this.skills);
  }

} //END COMPONENT

// skill factory function
function createSkill(des, length, id) {
  return {description: des, lengthOfTime: length, id: id}
}
