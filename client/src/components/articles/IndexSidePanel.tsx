import React, {Component, useState} from 'react';
import Menu from '../layout/Menu';
const { getMenuItems } = require('../../config/ConfigFunctions');
const menu = getMenuItems();
const menuItems = menu.menu.items;

class IndexSidePanel extends React.Component<Props,{}>{
  constructor(props: any){
    super(props);
  }

  render(){
    let indexSidePanelClasses = 'indexSidePanel';
    const { isOpen } = this.props;
    if(isOpen){
      indexSidePanelClasses  = 'indexSidePanel open';
      
    }
    else{
      indexSidePanelClasses = 'indexSidePanel '
    }

    return(
      <div className={indexSidePanelClasses}>
        <h2 className="index-header">Index</h2>
        {/* <nav className={indexSidePanelClasses } id="indexSidePanel"> */}
       
      </div>
    );
  }
}

type MyProps = {
  isOpen: boolean;
};

type Props = MyProps;

export default IndexSidePanel;