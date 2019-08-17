import React from 'react';
import IndexButton from '../../components/assets/IndexButton';
import IndexSidePanel from '../../components/layout/IndexSidePanel';

class ArticleIndexBarComponent extends React.Component<{}, State>  {
  constructor(props: any) {
    super(props);
    this.toggle = this.toggle.bind(this);
  }

  state: State = {
    isIndexSidePanelOpen: false,
  };

  public toggle() {
    this.setState((prevState) => {
      return {
        isIndexSidePanelOpen: !prevState.isIndexSidePanelOpen
      }
    });
  }

  render() {
    const { isIndexSidePanelOpen } = this.state;

    return (
      <div className="ArticleIndexBar-Component">
        <div className="article-indexbar">
        
        <IndexButton toggleIndexSidePanel={this.toggle}/>
        <IndexSidePanel isOpen={isIndexSidePanelOpen}/>
            <a className="breadcrumbs">USCENTCOM Medical Security Cooperation (MSC) Exchange Details</a> <span className=""> > </span> <a className="breadcrumbs last-breadcrumb">Homepage</a>
        </div>
      </div>
    );
  }
}

type State = {
  isIndexSidePanelOpen: boolean;
};

export default ArticleIndexBarComponent;