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
import indexButton from '../../assets/index2svg-01.svg';
import sampleImage2 from '../../assets/sampleImage2.png';
import sampleImage3 from '../../assets/sampleImage3.png';
import IndexButton from '../assets/IndexButton';

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
        <header data-test="Article-Component">
          <div className="article-container">
          <div className="article-indexbar">

              <div className="indexbar-container">
                <IndexButton toggleIndexSidePanel={this.toggleIndexSidePanel}/>
                {/* <img className="index-button" src={indexButton} onClick={this.toggleIndexSidePanel} alt="index-button"/> */}
                <div className="breadcrumbs-container">
                  <a className="breadcrumbs">Portal</a> <span className="breadcrumb-caret"> > </span> <a className="last-breadcrumb">USCENTCOM</a> <span className="breadcrumb-caret"> > </span> <button className="breadcrumbs-button">...add more</button>  
                </div>
              </div>
              <div className="article-banner">
                <span className="banner-title">
                  USCENTCOM 
                </span>
            </div>
          </div>

          <div className="body">
            <div className={sidePanelClasses}>
              <h2 className="index-header">Table of Contents</h2>
            </div>
            
            <div className="main">
            <div className="article-content row">
              <div className="col-xs-2 col-sm-1 col-md-1 col-lg-1">
              <div className="article-toolbar-largescreens">
              <Info/>
              <NewArticle/>
              <EditArticle/>
              <Bookmark/>
            </div>
              </div>
              <div className="article-sections col-xs-7 col-sm-7 col-md-8 col-lg-9">
                <h1 className="article-title">USCENTCOM </h1> 
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
        
              </div>   
              <div className="col-xs-3 col-sm-1 col-md-1 col-lg-2">
                <div className="Article-List row">
                  <h2 className="recommended">Related Articles</h2>
                  <div className="scrollable-area">
                    <div className="article-list-item">
                      <img className="recommended-image" src={sampleImage2} />
                    </div>

                    <div className="article-list-item">
                      <img className="recommended-image" src={sampleImage3} />
                    </div>

                    <div className="article-list-item">
                      <img className="recommended-image" src={sampleImage2} />
                    </div>

                    <div className="article-list-item">
                      <img className="recommended-image" src={sampleImage3} />
                    </div>
                    <div className="article-list-item">
                      <img className="recommended-image" src={sampleImage2} />
                    </div>

                    <div className="article-list-item">
                      <img className="recommended-image" src={sampleImage3} />
                    </div>
                  </div>
                </div> 
              </div> 
            </div>
            <ArticleToolBar/> 
            </div>
          </div>
        </div>
        </header>
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