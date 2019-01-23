import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import NameTitle from './NameTitle';
import Trade from './Trade';

const User = function(firstName) {
  const user = {};
  user.firstName = firstName;
  return user;
};

const user1 = User('alan');
const userFirstName = user1.firstName;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userFirstName: "no name yet"
    }
  };

  // componentWillMount() {
  //   this.setState({userFirstName: userFirstName});
  //
  // }

  render() {
    return (<div className="main_area">
      {/* {" " + user1.firstName} */}
      {/* <NameTitle className="welcome-header" firstName={this.state.userFirstName}/> */}
      <Trade/>

    </div>)
  }
}
