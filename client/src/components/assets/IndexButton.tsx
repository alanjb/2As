import React from 'react';
import indexButton from '../../assets/index-button.svg';

const IndexButton = (Props: any) => {
  const {toggleIndexSidePanel} = Props;
  return (
    <React.Fragment>
      <header className="PiXIcon">
        <div className="PiXIcon-Component">
          <img className="index-button" src={indexButton} onClick={toggleIndexSidePanel} alt="index"/>
        </div>
      </header>
    </React.Fragment>
  )
}

type MyProps = {
  toggleIndexSidePanel: () => any;
};

type Props = MyProps;

export default IndexButton;