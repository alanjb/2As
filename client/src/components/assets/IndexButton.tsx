import React from 'react';
import indexButton from '../../assets/index2svg-01.svg';

const IndexButton = (Props: any) => {
  const {toggleIndexSidePanel} = Props;
  return (
    <React.Fragment>
        <div className="IndexButton-Component">
          <img className="index-button" src={indexButton} onClick={toggleIndexSidePanel} alt="index"/>
        </div>
    </React.Fragment>
  )
}

type MyProps = {
  toggleIndexSidePanel: () => any;
};

type Props = MyProps;

export default IndexButton;