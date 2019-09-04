import React, {Component, useState} from 'react';
import Menu from '../layout/Menu';
import IndexButton from '../assets/IndexButton';
const { getMenuItems } = require('../../config/ConfigFunctions');
const menu = getMenuItems();
const menuItems = menu.menu.items;
import { Container, Row, Col } from 'reactstrap';

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
      <React.Fragment>
        <div className={indexSidePanelClasses}>
         <h2 className="index-header">Table of Contents</h2>
         {/* <IndexButton/> */}
          {/* <nav className={indexSidePanelClasses } id="indexSidePanel"> */}   
        </div>
      </React.Fragment>
    );
  }
}

type MyProps = {
  isOpen: boolean;
};

type Props = MyProps;

export default IndexSidePanel;