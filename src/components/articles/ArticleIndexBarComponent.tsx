import React from 'react';

class ArticleIndexBarComponent extends React.Component<Props, State>  {
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
    this.handlePassingIndexSidePanelProps();
  }

  public handlePassingIndexSidePanelProps = () => {
    let {isIndexSidePanelOpen} = this.state;
    this.props.getSidePanelProps(isIndexSidePanelOpen);
  }

  public render() {
    const { isIndexSidePanelOpen } = this.state;
    return (
      <div className="ArticleIndexBar-Component">
        <div className="article-indexbar">
            <div className="breadcrumbs-container">
              <a className="breadcrumbs">USCENTCOM Medical Security Cooperation (MSC) Exchange Details</a> <span className="breadcrumb-caret"> > </span> <a className="last-breadcrumb">Homepage</a> <span className="breadcrumb-caret"> > </span> <button className="breadcrumbs-button">...add more</button>  
            </div>
        </div>
      </div>
    );
  }
}

type State = {
  isIndexSidePanelOpen: boolean;
};

type MyProps = {
  getSidePanelProps: (isIndexSidePanelOpen:boolean) => any;
};

type Props = MyProps;

export default ArticleIndexBarComponent;