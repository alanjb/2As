import React from 'react';
import IndexButton from '../../components/assets/IndexButton';
import SampleImage from '../../components/assets/SampleImage';

export default class Home extends React.Component {
  constructor(props: any) {
    super(props);
  };

  render() {
    return (
      <div className="article-container">
        <div className="TopArea">
            <IndexButton/>
            <text className="breadcrumbs">Iron Maiden <text className="caret-breaker"> > </text>Songs</text>
        </div>
        <div className="TitleArea">
          <h1 className="article-title">The Rime of the Ancient Mariner (song)</h1>
          <hr className="Title-LineBreak"/>
        </div>
        <div className="ImageArea">
          <SampleImage/>
          <text className="image-caption">Taken from Iron Maiden's Somewhere Back in Time Tour in 2013</text>
        </div>
        <div className="SectionArea">
          <h1 className="section-title">History</h1>
          <hr className="Title-LineBreak"/>
        </div>
      </div>
    );
  }
}
