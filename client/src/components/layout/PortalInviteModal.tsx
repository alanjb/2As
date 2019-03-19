import React from 'react';

export default class Home extends React.Component {
  constructor(props: any) {
    super(props);
  };

  render() {
    return (
      <div className="form-container">

        <div className="Title-Area">
          <h1 className="title-header">Add to portals</h1>
          <text className="subtitle">
            Designate which portals you will invite this user to
          </text>
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
          Add user to portal
          </button>
          <a href="/" className="form-link">cancel</a>

        </div>

      </div>
    );
  }
}
