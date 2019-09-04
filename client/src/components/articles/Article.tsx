import React from 'react';
import ArticleToolBarComponentLargeScreen from './ArticleToolBarComponentLargeScreen';
import ArticleIndexBarComponent from './ArticleIndexBarComponent';
import ArticleToolBar from './ArticleToolBarComponent';
import Info from '../assets/InfoButton';
import NewArticle from '../assets/NewArticle';
import EditArticle from '../assets/EditArticle';
import Bookmark from '../assets/Bookmark';
import Tab from '../layout/Tab';
import Section from './Section';
import IndexSidePanel from '../articles/IndexSidePanel';
import { Container, Row, Col } from 'reactstrap';
import IndexButton from '../assets/IndexButton';
import indexButton from '../../assets/index2svg-01.svg';

class Article extends React.Component<Props, State>  {
  constructor(props: any) {
    super(props);
  };

  state: State = {
    isSidePanelClosed: false
  };

  public toggleIndexSidePanel = () => {
    this.setState((prevState) => {
      return {
        isSidePanelClosed: !prevState.isSidePanelClosed
      }
    });
  }

  public render() {
    let { isSidePanelClosed } = this.state;
    let sidePanelClasses = 'sidebar ';
    if(isSidePanelClosed){
      sidePanelClasses = 'sidebar close';
    }
    return (
      <React.Fragment>
        <div className="body">  
          <div className={sidePanelClasses}>
           <h2 className="index-header">Table of Contents</h2>
          </div>
          <div className="main">
            <div className="article-indexbar">
            <img className="index-button" src={indexButton} onClick={this.toggleIndexSidePanel} alt="index-button"/>
              <div className="breadcrumbs-container">
                <a className="breadcrumbs">USCENTCOM Medical Security Cooperation (MSC) Exchange Details</a> <span className="breadcrumb-caret"> > </span> <a className="last-breadcrumb">Homepage</a> <span className="breadcrumb-caret"> > </span> <button className="breadcrumbs-button">...add more</button>  
              </div>
            </div>
          <div className="article-content">
            <div className="row">
               <div className="col-xs-1 col-sm-2 col-md-2 col-lg-2">
               <div className="article-toolbar-largescreens">
                <Info/>
                <NewArticle/>
                <EditArticle/>
                <Bookmark/>
              </div>
               </div>
               <div className="col-xs-10 col-sm-8 col-md-8 col-lg-8">
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
                <Section/>
                <Section/>
                <Section/>
                <Section/>
                <Section/>
                <Section/>
                <Section/>
                <ArticleToolBar/> 
              </div>   
                <div className="col-xs-1 col-sm-2 col-md-2 col-lg-2"></div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

type State = {
  isSidePanelClosed: boolean;
};

type MyProps = {
  toggleIndexSidePanel: () => any;
};

type Props = MyProps;

export default Article;