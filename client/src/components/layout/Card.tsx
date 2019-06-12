import React from "react";
import Trash from "../assets/Trash";
import {Button} from 'reactstrap';

interface IState {}

export default class Home extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="card-container">
        <span className="card-header">
          <a>USCENTCOM Medical Security Cooperation (MSC) Exchange</a>
        </span>
        <span className="form-subtitle">Choose a permission role</span> 
        <select className="select-portal-permission">
          <option value="none">None</option>
          <option value="admin">Admin</option>
          <option value="writer">Writer</option>
          <option value="reader">Reader</option>
        </select> 
        <button type="button" className="form-button remove-button" name="SendInvite">
            Remove
          </button>
      </div>
    );
  }
}
