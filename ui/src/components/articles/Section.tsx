import React from 'react';
import ArticleToolBar from './ArticleToolBarComponent';
import Tab from '../layout/Tab';

export default class Article extends React.Component {
  constructor(props: any) {
    super(props);
  };

  render() {
    return (
        <div className="Section-Component"> 
            <h3 className="section-title">Baltics Training Center</h3>
            <Tab/>
        </div>
    );
  }
}
