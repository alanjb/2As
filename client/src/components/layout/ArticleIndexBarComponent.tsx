import React from 'react';
import IndexButton from '../../components/assets/IndexButton';

export default class ArticleToolbar extends React.Component {
  constructor(props: any) {
    super(props);
  };

  render() {
    return (
      <div className="ArticleIndexBar-Component">
        <div className="article-indexbar">
          <IndexButton/>
        <a className="breadcrumbs">USCENTCOM Medical Security Cooperation (MSC) Exchange Details<span className="caret-breaker"> > </span>Homepage</a>
        </div>
      </div>
    );
  }
}