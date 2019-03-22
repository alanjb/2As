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
        <div className="role-radios">
          <header className="card-header">The Princess Bride </header>
          <input className="radio-inputs" type="radio" name="portalRole" value="Admin"/>
          <span className="radioButtonText">Admin</span>
          <input className="radio-inputs" type="radio" name="portalRole" value="Writer"/>
          <span className="radioButtonText">Writer</span>
          <input className="radio-inputs" type="radio" name="portalRole" value="Reader"/>
          <span className="radioButtonText">Reader</span>
        </div>
        
      </div>
    );
  }
}
