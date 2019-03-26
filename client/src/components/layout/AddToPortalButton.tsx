import React from 'react';
import Context from '../../config/Context';

const AddToPortalButton = () => {
    return (
      <Context.Consumer>
        {context => (
          <header className="AddToPortalButton">
            <div>
              <button type="button"
                onClick={context.toggleInviteToPortalModal}
                className="form-button button-blue button-fullWidth"
                name="addToPortal">
                Invite this user to your portals
              </button>
            </div>
          </header>
        )}
      </Context.Consumer>
  );
}
export default AddToPortalButton;
