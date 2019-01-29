import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignUpLink from './SignUpLink';

export default class Landing extends React.Component{
  render(){
    return(
      <div className="Landing-Component">
        <SignUpLink></SignUpLink>
      </div>
    )
  }
}
