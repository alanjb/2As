import React from 'react';
import caretSVG from '../../assets/caret.svg';

const Caret = (props: any) => {
  let caretClasses = "caret";
  const {isNavPanelOpen} = props;

  if(isNavPanelOpen){
    caretClasses = "caret open";
  }
  else{
    caretClasses = "caret";
  }
  return(
      <img src={caretSVG} className={caretClasses} id="caret" alt="caret-here" />
    )
}

interface IProps{
  isNavPanelOpen: boolean
}

export default Caret;
