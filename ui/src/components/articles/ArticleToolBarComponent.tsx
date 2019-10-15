import React from 'react';
import Info from '../assets/InfoButton';
import NewArticle from '../assets/NewArticle';
import EditArticle from '../assets/EditArticle';
import BookmarkMobile from '../assets/BookmarkMobile';
import DuplicateArticle from '../assets/DuplicateArticle';

export default class ArticleToolbarComponent extends React.Component {
  constructor(props: any) {
    super(props);
  };

  render() {
    return (
      <div className="ArticleToolbar-Component space-between">
        <Info/>
        <NewArticle/>
        <EditArticle/>
        <BookmarkMobile/>
        <DuplicateArticle/>
      </div>
    );
  }
}
