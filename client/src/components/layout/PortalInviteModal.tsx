import React from 'react';
import Card from './Card';
import Backdrop from './Backdrop';

interface IProps{
  isOpen: boolean
}

export default class Home extends React.Component<IProps, {}> {
  constructor(props: any) {
    super(props);
  };

  render() {
    let _backdrop;
    let portalInviteClasses = 'form-container modal';
    const {isOpen} = this.props;
    if(isOpen){
      portalInviteClasses = 'form-container modal open-modal';
      _backdrop = <Backdrop/>;
    }
    else{
      portalInviteClasses = 'form-container modal'
    }
    return (
      <div className={portalInviteClasses}>
        {_backdrop}
        <div className="tools-area">

        </div>
        <div className="Title-Area">
          <h1 className="title-header">Add to portals</h1>
          <text className="form-subtitle">
            Designate which portals you will invite this user to
          </text>
        </div>

        <div className="Card-Area">
          <h2 className="input-header">
            Assign this users roles to your portals
          </h2>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>

        <div className="Input-Area">
          <button type="button" className="form-button" name="SendInvite">
          {/*show number of portals on button*/}
            Add user to portal(s)
          </button>
          <a href="/" className="form-link">cancel</a>
        </div>

      </div>
    );
  }
}
