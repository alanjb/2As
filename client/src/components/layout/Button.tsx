import React, { FC } from 'react';

interface IProps {
  type: String,
  label: String,
  isButtonDisabled?: boolean;
  styles: String
}

const Button:React.FC<IProps> = (props: any) => {
  return(
    <button 
      className= {props.styles} 
      onClick= {props.action}
      disabled= {props.isButtondDisabled}
    >    
      {props.label} 
    </button>
  );
}

export default Button;
