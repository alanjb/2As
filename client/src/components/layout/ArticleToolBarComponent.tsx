import React from 'react';
import Info from '../../components/assets/InfoButton';
import NewArticle from '../../components/assets/NewArticle';
import EditArticle from '../../components/assets/EditArticle';
import BookmarkMobile from '../../components/assets/BookmarkMobile';


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
      </div>
    );
  }
}
