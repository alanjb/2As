import React from 'react';
import Card from './Card';
// import Backdrop from './Backdrop';
import ExitButton from '../assets/ExitButton';
import FilterBar from './FilterBar';
import Context from '../../config/Context';

interface IProps{
  isOpen: boolean
}

export default class PortalInviteModal extends React.Component<IProps, {}> {
  constructor(props: any) {
    super(props);
  };

  render() {
    // let _backdrop;
    let portalInviteClasses = 'form-container modal';
    const {isOpen} = this.props;
    if(isOpen){
      portalInviteClasses = 'form-container modal open-modal';
      // _backdrop = <Backdrop/>;
    }
    else{
      portalInviteClasses = 'form-container modal'
    }

    return (
      <Context.Consumer>
        {context => (
          <div className={portalInviteClasses}>

            <React.Fragment>
              <div className="Title-Area">
                <h1 className="title-header modal-header">Assign to portals</h1>
                <ExitButton/>
              </div>
            </React.Fragment>


            <React.Fragment>
              <span className="form-subtitle">
                Designate which portals you will invite this user to
              </span>
              <FilterBar/>
            </React.Fragment>

            <React.Fragment>
              <div className="Card-Area">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
              </div>
            </React.Fragment>

            <React.Fragment>
              <div className="Input-Area">
                <hr className="divider-line"/>
                <button type="button" className="form-button" name="SendInvite" onClick={context.toggleInviteToPortalModal}>
                  Save
                </button>

                <a href="/" className="form-link">Clear all</a>

              </div>
            </React.Fragment>

            </div>
        )}
      </Context.Consumer>



    );
  }
}
