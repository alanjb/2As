import React from 'react';
import Trash from '../assets/Trash';

interface IState{

}

export default class Home extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {

    }
  };

  render() {
    return (
      <div className="card-container">
        <span className="card-header">
          Sgt. Pepper's Lonely Hearts Club Band
        </span>
        <span className="form-subtitle">Choose a permission role</span>
        <select className="select-portal-permission">
          <option value="none">None</option>
          <option value="admin">Admin</option>
          <option value="writer">Writer</option>
          <option value="reader">Reader</option>
        </select>
      </div>
    );
  }
}
