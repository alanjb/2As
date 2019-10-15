import React from 'react';
import Info from '../assets/InfoButton';
import NewArticle from '../assets/NewArticle';
import EditArticle from '../assets/EditArticle';
import Bookmark from '../assets/Bookmark';

class ArticleToolBarComponentLargeScreen extends React.Component {
  constructor(props: any) {
      super(props);
    };
    render() {
      return (
        <div className="article-toolbar-largescreens">
          <Info/>
          <NewArticle/>
          <EditArticle/>
          <Bookmark/>
        </div>
      );
    }
  }
export default ArticleToolBarComponentLargeScreen;