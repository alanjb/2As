import React from 'react';
import Button from '../layout/Button';
import { connect } from "react-redux";

interface IProps{
  isAddToPortalModalOpen: boolean
}

interface IState{

}

class InviteNewUser extends React.Component<IProps, {}> {
  constructor(props: any) {
    super(props);
    this.state = {

    }
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
            <option value="" disabled selected hidden>Select a citizenship...</option>
            <option value="none">None</option>
            <option value="admin">Admin</option>
            <option value="writer">Writer</option>
            <option value="reader">Reader</option>
          </select>
        </div>

        <div className="Input-Area">
          <h2 className="input-header">First Name</h2>
          <input className="form-input" id="first-name-input" type="text" name="firstName"/>
        </div>

        <div className="Input-Area">
          <h2 className="input-header">Last Name</h2>
          <input className="form-input" type="text" name="lastName"/>
        </div>

        <div className="Input-Area">
          <h2 className="input-header">Email</h2>
          <input className="form-input" type="text" name="email"/>
        </div>

        <div className="Input-Area">
          <h2 className="input-header">Sponsor's Name</h2>
          <input className="form-input" type="text" name="sponsorsName"/>
        </div>

        <div className="Input-Area">
          <h2 className="input-header">Sponsor's Email</h2>
          <input className="form-input" type="text" name="sponsorsEmail"/>
        </div>

        <div className="Input-Area">
          <h2 className="input-header">Justification</h2>
          <input className="form-input large-textarea" type="text" name="Justification"/>
        </div>

        <div className="Input-Area">
          <Button type="submit" styles="button success-button"  label="Invite new user" isButtonDisabled></Button>

          {/* <a href="/" className="form-link">View invitation list</a> */}
        </div>
      <div>
    </div>
  </div>
  );
  }

}

//get store state to this component everytime it updates 

// const mapStateToProps = state => {
//   return {
//     //used for selecting the part of the data from the store that the connected component needs
//     age: state.age
//   };
// };

// const mapDispachToProps = (dispatch: any) => {
//   return {
//     invitenewuser: () => dispatch(
//       { type: "INVITE_NEW_USER_REQUEST"}
//     ),
//   };
// };

// export default connect(
//   null,
//   mapDispachToProps
// )(InviteNewUser);

export default InviteNewUser;