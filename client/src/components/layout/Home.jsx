import React from 'react';
// import {Container, Row, Col} from 'reactstrap';
// import NameTitle from './NameTitle';
import SignUp from '../auth/SignUp';

// const User = function(firstName) {
//   const user = {};
//   user.firstName = firstName;
//   return user;
// };

// const user1 = User('alan');
// const userFirstName = user1.firstName;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  };

  render() {
    return (
      <div className="main_area">
        <h1>Welcome, {this.state.userFirstName}</h1>
        <SignUp

        />
      </div>
    )
  }
}
