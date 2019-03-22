import React from 'react';
import trashSVG from '../../assets/trash.svg';

interface IState {
  isTrashClicked: boolean
}

export default class Trash extends React.Component<{}, IState> {
  constructor(props: any){
    super(props);
    this.state = {
      isTrashClicked: false
    }
  }
  render(){
    return(
      <div className="Trash-Component">
        <img src={trashSVG} className="trash-button" id="caret" alt="caret-here" />
      </div>
    )
  }

}
