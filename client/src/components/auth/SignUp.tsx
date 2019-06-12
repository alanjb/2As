import * as React from 'react';
import {Button} from 'reactstrap';
import {Form, FormGroup, Input} from 'reactstrap';
import {Container} from 'reactstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';
// import ActionButton from '../layout/ActionButton';

interface IState {
  isSubmitButtonDisabled: boolean;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default class SignUp extends React.Component<{},IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isSubmitButtonDisabled: true,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  onSubmit = (event: React.FormEvent<HTMLInputElement>) : void =>   {
    event.preventDefault();
    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    }
    axios.post('api/users/signup', newUser)
    .then(res => alert("Thank you for creating an account, " + res.data.firstName))
    .catch(err => console.log(err))
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) : void => {
    this.setState({
      email: event.target.value
    });
    console.log('email name change detected');

  }

  handleSumbit = () => {

  }

  handleDisableSubmitButton = () => {
    // if validation doesn't pass, keep button isSubmitButtonDisabled
    // if it does pass, remove disabled attribute
  }

  public render(): React.ReactNode {
    const {email, isSubmitButtonDisabled} = this.state;

    return (<div className="SignUp-Component">
      <Container>
        <Form onSubmit={this.handleSumbit}>
          <Link to="/">
            <Button>
              back
            </Button>
          </Link>
          <h1>Sign up </h1>
          <FormGroup>
          <Input type="email" name="email" id="email" value={email} onChange={(e) => this.handleChange(e)} placeholder="Email address"/>
          <br></br>
          </FormGroup>
          <FormGroup>
          {/* <ActionButton isSubmitButtonDisabled={isSubmitButtonDisabled}/> */}
        </FormGroup>
        </Form>
      </Container>
    </div>);
  }
}
