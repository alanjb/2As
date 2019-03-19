import React from 'react';
import caretSVG from '../../assets/caret.svg';

interface IProps{
  isSidePanelOpen: boolean
}

const Caret = (props: any) => {
  let caretClasses = "caret";
  const {isSidePanelOpen} = props;

  if(isSidePanelOpen){
    caretClasses = "caret open";
  }
  else{
    caretClasses = "caret";
  }
  return(
      <img src={caretSVG} className={caretClasses} id="caret" alt="caret-here" />
    )
}

export default Caret;
