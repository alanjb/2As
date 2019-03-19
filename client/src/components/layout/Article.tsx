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
          <p className="section-paragraph">
          Everyone wants to enjoy the good parts - but you have to build the framework first. We have all at one time or another mixed some mud. I'm sort of a softy, I couldn't shoot Bambi except with a camera. I guess that would be considered a UFO. A big cotton ball in the sky. This is the fun part Working it up and down, back and forth.
          That's a crooked tree. We'll send him to Washington. You don't have to spend all your time thinking about what you're doing, you just let it happen. Isn't it fantastic that you can change your mind and create all these happy things?
          Nature is so fantastic, enjoy it. Let it make you happy. There's nothing wrong with having a tree as a friend. It's beautiful - and we haven't even done anything to it yet. Nice little fluffy clouds laying around in the sky being lazy. Now we'll take the almighty fan brush.
          I'll go over the colors one more time that we use: Titanium white, Thalo green, Prussian blue, Van Dyke brown, Alizarin crimson, Sap green, Cad yellow, and Permanent red. We wash our brush with odorless thinner. Put your feelings into it, your heart, it's your world. Little trees and bushes grow however makes them happy.
          </p>
        </div>
      </div>
    );
  }
}
