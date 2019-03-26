import React from 'react';
import AddToPortalButton from './AddToPortalButton';

interface IProps{
  isAddToPortalModalOpen: boolean
}

export default class Home extends React.Component<IProps, {}> {
  constructor(props: any) {
    super(props);
  };

  render() {
    return (
      <div className="form-container">
        <div className="Title-Area">
          <h1 className="title-header">Invite new user</h1>
          <label className="form-subtitle">
            Send someone an invitation to PiX. You can also
            invite them to a specific portal that you are an
            admin of.
          </label>
        </div>

        <div className="Input-Area">
          <h2 className="input-header">Citizenship</h2>
          <select className="multiselect" required>
            <option value="" disabled selected hidden>Select a citizenship</option>
            <option value="none">None</option>
            <option value="admin">Admin</option>
            <option value="writer">Writer</option>
            <option value="reader">Reader</option>
          </select>
        </div>

        <div className="Input-Area">
          <h2 className="input-header">First Name</h2>
          <input className="form-input" id="first-name-input" type="text" name="firstName" placeholder="First Name"/>
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
            <AddToPortalButton />
        </div>

        <div className="Input-Area">
          <hr className="divider-line"/>
          <button type="button" className="form-button" name="SendInvite">
            Send invite
          </button>
          <a href="/" className="form-link">View invitation list</a>
        </div>
      <div>
    </div>
  </div>
  );
  }
}
