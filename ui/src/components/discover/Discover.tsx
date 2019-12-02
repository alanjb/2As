import React from 'react';
import {Container} from 'reactstrap';

class Discover extends React.Component<Props, State>  {
  constructor(props: any) {
    super(props);
  };

  state: State = {
  
  };

  public render() {
    return (
      <React.Fragment>
        <div className="Discover-Component row">
          <div className="col-md-8 col-lg-12">
            <div className="communities-top">
              <div className="community-item selected">All</div> 
              <div className="community-item">Afghanistan</div> 
              <div className="community-item">Africa</div> 
              <div className="community-item">Arabian Peninsula</div> 
              <div className="community-item">Iraq</div> 
              <div className="community-item">Levant</div> 
              <div className="community-item">Multinational</div> 
              <div className="community-item">Pacific</div> 
              <div className="community-item">Syria</div> 
              <div className="community-item">Ukraine</div> 
            </div>
          </div> 

          <div className="col-md-8 col-lg-12">
            <div className="communities-bottom">
              <div className="community-item selected">All</div> 
              <div className="community-item">Politics &amp; Governance</div> 
              <div className="community-item">Military &amp; Security</div> 
              <div className="community-item">Economics</div> 
              <div className="community-item">Society, Culture, &amp; Population</div> 
              <div className="community-item">Information &amp; Media </div> 
              <div className="community-item">Infrastructure</div> 
              <div className="community-item">Physical Environment</div> 
              <div className="community-item">Humanitarian Issues</div> 
              <div className="community-item">International Relations</div> 
              <div className="community-item">Individuals</div> 
            </div>
          </div> 

          <div className="col-md-8 col-lg-12">
            <Container>
              <div className="discover-main">
                <div className="left-column">
                  <div className="left-column-headerinfo">
                    <h3 className="discover-article-spotlight-header">Russian Espionage Networks</h3>
                    <p className="subtext">
                    Russia has maintained a strong interest in the Baltic States of Estonia,
                    Latvia, and Lithuania, considering them to still be within its sphere of 
                    influence, according to a November 2018 report by British think tank Royal 
                    United Services Institute (RUSI). With what has been described as a 
                    “very high” level of penetration, it has gathered intelligence on military 
                    and political processes in the Baltic nations.
                    </p>
                  </div>
                  <div className="">
                    tets
                  </div>

                  
                </div>

                <div className="right-column">
                  test
                </div>
            </div>
            </Container>
          </div>
        </div>


      </React.Fragment> 
    );
  }
}

type State = {
  // isSidePanelClosed: boolean;
};

type MyProps = {
  // toggleIndexSidePanel: () => any;
};

type Props = MyProps;

export default Discover;