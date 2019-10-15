import * as React from 'react';
import {Button, Container, Form, FormGroup, Input} from 'reactstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';

interface IState {
  isSubmitButtonDisabled: boolean;
  firstName: string;
  lastName: string;
  citizenship: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default class Register extends React.Component<{},IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isSubmitButtonDisabled: true,
      firstName: "",
      lastName: "",
      citizenship: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  public handleChange = (event: React.ChangeEvent<HTMLInputElement>) : void => {
    //www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react
    const value = event.target.value;
    this.setState({
      ...this.state,
      [event.target.name]: value
    });
  } 

  public handleDisableSubmitButton = () => {
    // if validation doesn't pass, keep button isSubmitButtonDisabled
    // if it does pass, remove disabled attribute
  }

  private handleSubmit = async(event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    // create a new user object 
    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword, 
      citizenship: this.state.citizenship
    }
    axios.post('/api/register', newUser)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(function (error) {
        console.log("CLIENT ERROR IS: ");
        console.log(error);
      });
  }

  public render(): React.ReactNode {
    const {firstName, lastName, password, email, citizenship, isSubmitButtonDisabled} = this.state;
    return (
    <div className="Register-Component">
      <Container>
        <Form onSubmit={this.handleSubmit}>
          {/* <Link to="/">
            <Button>
              back
            </Button>
          </Link> */}
          <br/>
          <h1>Register for PiX</h1>
          <br></br>
          <FormGroup>
            <Input type="text" name="firstName" id="firstName" value={firstName} onChange={(e) => this.handleChange(e)} placeholder="First Name"/>
            <br></br>
          </FormGroup>
          <FormGroup>
            <Input type="text" name="lastName" id="lastName" value={lastName} onChange={(e) => this.handleChange(e)} placeholder="Last Name"/>
            <br></br>
          </FormGroup>
          <FormGroup>
            <Input type="email" name="email" id="email" value={email} onChange={(e) => this.handleChange(e)} placeholder="Email Address"/>
            <br></br>
          </FormGroup>
          <FormGroup>
            <Input type="select" name="citizenship" value={citizenship} onChange={(e) => this.handleChange(e)} id="citizenship-multiselect" placeholder="Select your citizenship...">
              <option>Select a citizenship...</option>
              <option>United States</option>
              <option>Great Britain</option>
              <option>French</option>
              <option>German</option>
              <option>Italian</option>
            </Input>            
            <br></br>
          </FormGroup>
          <FormGroup>
            <Input type="password" name="password" id="password" value={password} onChange={(e) => this.handleChange(e)} placeholder="Password"/>
            <br></br>
          </FormGroup>
          <FormGroup>
            <Input type="password" name="confirmPassword" id="confirmPassword" onChange={(e) => this.handleChange(e)} placeholder="Confrim Password"/>
            <br></br>
          </FormGroup>
          <Button color="success" label="Register">Register</Button>
          <br/>
          <br/>
          <br/>
        </Form>
      </Container>
    </div>);
  }
}