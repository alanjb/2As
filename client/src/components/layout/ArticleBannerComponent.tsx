import React from 'react';
import IndexButton from '../../components/assets/IndexButton';
import SampleImage from '../../components/assets/SampleImage';
import Humanitarian from '../../components/assets/Humanitarian';
import ArticlesButton from '../layout/ArticlesButton';

export default class ArticleToolbar extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {

    }
  };

  render() {
    return (
      <header className="Navbar" role="banner">
        <div className="ArticleBanner-Component">
          <Humanitarian/>
          <a href="/" className="Banner-Title">USCENTCOM Med...</a>
          <ArticlesButton/>
        </div>
      </header>
    );
  }
}
