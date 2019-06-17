import React from 'react';
import icon from '../../assets/pix-icon.svg';

class PiXIcon extends React.Component<Props, State> {

  constructor(props: any) {
    super(props);
  }

  public render(){
    const {toggleNavPanel} = this.props;
    return (
      <React.Fragment>
        <header className="PiXIcon">
          <div className="PiXIcon-Component">
            <img className="PiX-Icon" src={icon} onClick={toggleNavPanel} alt="icon"/>
          </div>
        </header>
      </React.Fragment>
    )
  }
}

type MyProps = {
  toggleNavPanel: () => any;
};

type Props = MyProps;

type State = {
  isNavPanelOpen: boolean;
};

export default PiXIcon;