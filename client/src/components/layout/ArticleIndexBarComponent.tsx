import React from 'react';
import IndexButton from '../../components/assets/IndexButton';
import Info from '../../components/assets/InfoButton';
import NewArticle from '../../components/assets/NewArticle';
import EditArticle from '../../components/assets/EditArticle';
import Bookmark from '../../components/assets/Bookmark';


export default class ArticleToolbar extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {

    }
  };

  render() {
    return (
      <header className="Navbar" role="banner">
        <div className="ArticleIndexBar-Component">
          <IndexButton/>
          <a className="breadcrumbs">USCENTCOM Medical Security Cooperation (MSC) Exchange Details<span className="caret-breaker"> > </span>Homepage</a>
          {/*
          <span className="divider"></span>
            <EditArticle/>
            <Info/>
            <NewArticle/>
            <Bookmark/>
          */}
        </div>
      </header>
    );
  }
}
