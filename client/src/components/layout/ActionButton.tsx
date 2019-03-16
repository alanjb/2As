import React from 'react';
import {Button} from 'reactstrap';

interface IProps{
  isSubmitButtonDisabled: boolean,
}

interface IState{
  isSubmitButtonDisabled: boolean,
}

export default class ActionButton extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isSubmitButtonDisabled: true,
    };
  }
  render() {
    const {isSubmitButtonDisabled}: {isSubmitButtonDisabled: boolean} = this.state;
    return (
      <div>
        <Button name="SignUpButton" type="button" disabled={isSubmitButtonDisabled}>Sign Up</Button>
      </div>
    );
  }
}
