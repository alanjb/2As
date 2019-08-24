import React from 'react';
import ArticleIndexBarComponent from './ArticleIndexBarComponent';
import ArticleToolBar from './ArticleToolBarComponent';
import Info from '../assets/InfoButton';
import NewArticle from '../assets/NewArticle';
import EditArticle from '../assets/EditArticle';
import Bookmark from '../assets/Bookmark';
import Tab from '../layout/Tab';
import Section from './Section';

class Article extends React.Component {
  constructor(props: any) {
    super(props);
  };

  render() {
    let articleComponentClasses = 'Article-Component';
    // const { isOpen } = this.props;
    // if(!isOpen){
    //   articleComponentClasses  = 'indexSidePanel open';
    // }
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
          <div className="tag-area">
            <div className="article-tag first-tag">
              <span><a>Middle East &amp; Central Asia</a></span>
            </div>
            <div className="article-tag">
              <span><a>Infrastructure</a></span>
            </div>
            <div className="article-tag">
              <span><a>Syria</a></span>
            </div>
          </div>
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

export default Article;