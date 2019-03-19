import React from 'react';

export default class Home extends React.Component {
  constructor(props: any) {
    super(props);
  };

  render() {
    return (
      <div className="form-container">

        <div className="Title-Area">
          <h1 className="title-header">Invite new user</h1>
          <text className="subtitle">
          Send someone an invitation to PiX. You can also
          invite them to a specific portal that you are an
          admin of.
          </text>
        </div>

        <div className="Input-Area">
          <h2 className="input-header">Citizenship</h2>
          <input className="form-input" type="text" name="citizenship" placeholder="Citizenship"/>
        </div>

        <div className="Input-Area">
          <h2 className="input-header">First Name</h2>
          <input className="form-input" type="text" name="firstName" placeholder="First Name"/>
        </div>

        <div className="Input-Area">
          <h2 className="input-header">Last Name</h2>
          <input className="form-input" type="text" name="lastName" placeholder="Last Name"/>
        </div>

        <div className="Input-Area">
          <h2 className="input-header">Email</h2>
          <input className="form-input" type="text" name="email" placeholder="Email"/>
        </div>

        <div className="Input-Area">
          <h2 className="input-header">Sponsor's Name</h2>
          <input className="form-input" type="text" name="sponsorsName" placeholder="Sponsor's Name"/>
        </div>

        <div className="Input-Area">
          <h2 className="input-header">Sponsor's Email</h2>
          <input className="form-input" type="text" name="sponsorsEmail" placeholder="Sponsor's Email"/>
        </div>

        <div className="Input-Area">
          <h2 className="input-header">Justification</h2>
          <input className="form-input large-textarea" type="text" name="Justification"/>
        </div>

        <div className="Input-Area">
          <h2 className="input-header">Make this user a member of my portal</h2>
          <select className="multiselect" name="portals" multiple>
            <option value="portal1">Portal1</option>
            <option value="portal2">Portal2</option>
            <option value="portal3">Portal3</option>
          </select>

          <select className="multiselect" name="portals" placeholder="Choose a permission level">
            <option selected value="0" disabled>Choose a permission role</option>
            <option value="admin">Admin</option>
            <option value="writer">Writer</option>
            <option value="reader">Reader</option>
          </select>
        </div>

        <div className="Input-Area">
          <button type="button" className="form-button" name="SendInvite">
          Send invite
          </button>
          <a href="/" className="form-link">View invitation list</a>

        </div>

      </div>
    );
  }
}
