import React from 'react';
import caretSVG from '../../assets/caret.svg';

const Caret = (Props: Props) => {
  let caretClasses = "caret";
  const {isOpen} = Props;

  if(isOpen){
    caretClasses = "caret open";
  }
  else{
    caretClasses = "caret";
  }

  return(
      <img src={caretSVG} className={caretClasses} id="caret" alt="caret-here" />
    )
}

type MyProps = {
    isOpen: boolean;
  };
  
type Props = MyProps;

export default Caret;