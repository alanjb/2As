import React from 'react';
import IndexButton from '../../components/assets/IndexButton';

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
          <a className="breadcrumbs">Portal <span className="caret-breaker"> > </span>USCENTCOM Medical Security Cooperation (MSC) Exchange</a>
        </div>
      </header>
    );
  }
}
