import React from 'react';
import Info from '../../components/assets/InfoButton';
import NewArticle from '../../components/assets/NewArticle';
import EditArticle from '../../components/assets/EditArticle';
import Bookmark from '../../components/assets/Bookmark';


export default class ArticleToolbarComponent extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {

    }
  };

  render() {
    return (
      <header className="Navbar" role="banner">
        <div className="ArticleToolbar-Component">
          <Info/>
          <NewArticle/>
          <EditArticle/>
          <Bookmark/>
        </div>
      </header>
    );
  }
}
