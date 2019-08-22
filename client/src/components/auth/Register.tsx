import * as React from 'react';
import {Button} from 'reactstrap';
import {Form, FormGroup, Input} from 'reactstrap';
import {Container} from 'reactstrap';
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

  public handleSubmit = (event: React.FormEvent<HTMLInputElement>) : void =>   {
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
    //ajax request 
    axios.post('api/users/register', newUser)
    .then(res => alert("Thank you for creating an account, " + res.data.firstName))
    .catch(err => console.log(err))
  }

  public handleChange = (event: React.ChangeEvent<HTMLInputElement>) : void => {
    this.setState({
       
    }); 
    console.log('change dected at: ' + event.target.name);
  }

  public handleDisableSubmitButton = () => {
    // if validation doesn't pass, keep button isSubmitButtonDisabled
    // if it does pass, remove disabled attribute
  }

  public render(): React.ReactNode {
    const {firstName, lastName, password, email, citizenship, isSubmitButtonDisabled} = this.state;

    return (
    <div className="Register-Component">
      <Container>
        <Form handleSubmit={this.handleSubmit}>
          {/* <Link to="/">
            <Button>
              back
            </Button>
          </Link> */}
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
            <Input type="text" name="citizenship" id="citizenship" value={citizenship} onChange={(e) => this.handleChange(e)} placeholder="Citizenship"/>
            <br></br>
          </FormGroup>
          <FormGroup>
            <Input password="password" name="password" id="password" value={password} onChange={(e) => this.handleChange(e)} placeholder="Password"/>
            <br></br>
          </FormGroup>
          <FormGroup>
            <Input password="confirmPassword" name="password" id="password" onChange={(e) => this.handleChange(e)} placeholder="Confrim Password"/>
            <br></br>
          </FormGroup>
          <Button color="success" label="Register" handleSubmit={this.handleSubmit}>Register</Button>
        </Form>
      </Container>
    </div>);
  }
}
