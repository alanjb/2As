import React, { FC } from 'react';

interface IProps {
  type: string,
  label: string,
  isButtonDisabled?: boolean
}

const Button:React.FC<IProps> = (props: any) => {
  return(
    <button 
      style= {props.style} 
      onClick= {props.action}
      disabled= {props.isButtondDisabled}
    >    
      {props.label} 
    </button>
  );
}

export default Button;
