import React from 'react';
import ArticleIndexBarComponent from '../layout/ArticleIndexBarComponent';
import ArticleToolBar from '../layout/ArticleToolBarComponent';
import Info from '../../components/assets/InfoButton';
import NewArticle from '../../components/assets/NewArticle';
import EditArticle from '../../components/assets/EditArticle';
import Bookmark from '../../components/assets/Bookmark';
import Tab from '../../components/layout/Tab';
import Section from '../../components/layout/Section';

export default class Article extends React.Component {
  constructor(props: any) {
    super(props);
  };

  render() {
    return (
      <div className="Article-Component row h-100"> 
        <ArticleIndexBarComponent/>
        <div className="col-xs-1 col-sm-2 col-md-2 col-lg-2">
           <div className="article-toolbar-largescreens">
            <EditArticle/>
            <NewArticle/>
            <Info/>
            <Bookmark/>
          </div> 
        </div>  
        <div className="article col-xs-10 col-sm-8 col-md-8 col-lg-8">
          <div className="article-banner">
            <span><a>USCENTCOM Medical Security Cooperation (MSC) Exchange</a></span>
          </div>
          <h1 className="article-title">USCENTCOM Medical Security Cooperation (MSC) Exchange Details</h1>
          <Section/>
          <div className="Section-Component"> 
            <h3 className="section-title">USCENTCOM Command Surgeon Welcome Letter</h3>
            <Tab/>
        </div>
        <div className="Section-Component"> 
            <h3 className="section-title">Surgeon Welcome Letter</h3>
            <Tab/>
        </div>
        <div className="Section-Component"> 
            <h3 className="section-title">Surgeon Letter</h3>
            <Tab/>
        </div>
        <div className="Section-Component"> 
            <h3 className="section-title">Security Cooperation (MSC)</h3>
            <Tab/>
        </div>
        <div className="Section-Component"> 
            <h3 className="section-title">S4knd</h3>
            <Tab/>
        </div>
        <div className="Section-Component"> 
            <h3 className="section-title">dgjand</h3>
            <Tab/>
        </div>
        </div> 
        <div className="col-xs-1 col-sm-2 col-md-2 col-lg-2"/> 
        <ArticleToolBar/> 
      </div>   
    );
  }
}
