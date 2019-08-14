import React from 'react';
import ArticleToolBar from '../layout/ArticleToolBarComponent';
import Tab from '../../components/layout/Tab';

export default class Article extends React.Component {
  constructor(props: any) {
    super(props);
  };

  render() {
    return (
        <div className="Section-Component"> 
            <h3 className="section-title">Davis Conference Center, MacDill AFB, FL - 1-5 April 2019</h3>
            <Tab/>
        </div>
    );
  }
}
