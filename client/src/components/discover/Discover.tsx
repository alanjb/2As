import React from 'react';
import nytimes_image from '../../assets/nytimes_image.jpg';

class Discover extends React.Component<Props, State>  {
  constructor(props: any) {
    super(props);
  };

  state: State = {
  
  };

  public render() {
    return (
      <React.Fragment>
        <div className="Discover-Component">
           <div className="communities-top">
           <div className="community-item selected">World</div> 
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

           <div className="communities-bottom">
           <div className="community-item selected">All</div> 
           <div className="community-item">Politics &amp; Governance</div> 
            <div className="community-item">Military &amp; Security</div> 
            <div className="community-item">Economics</div> 
            <div className="community-item">Society, Culture &amp; Population</div> 
            <div className="community-item">Information &amp; Media</div> 
            <div className="community-item">Infrastructure</div> 
            <div className="community-item">Physical Environment</div> 
            <div className="community-item">Humanitarian Issues</div> 
            <div className="community-item">International Relations</div> 
            <div className="community-item">Individuals</div> 
          </div>

            <div className="discover-main">
              <div className="col-xs-11 col-sm-10 col-md-10 col-lg-9">
                <div className="discover-article-spotlight">
                  <div className="discover-article-spotlight-leftcolumn">
                    <h3 className="discover-article-spotlight-header">Saudi Arabia Says Iranian Weapons Were Used in Strikes on Oil Facilities</h3>
                    <p className="discover-article-spotlight-subheader">
                      The claim, made without any evidence, appeared to move the Saudis close to directly blaming Iran for attacks on oil facilities.
                    <br/>
                    <span className="discover-article-spotlight-metadata">4m ago 518 comments</span>
                    </p>
                  </div>
                  <div className="discover-article-spotlight-rightcolumn">
                    <img className="discover-article-spotlight-image" src={nytimes_image} />
                  </div>  
                </div>
              </div>
              <div className="discover-right-column col-xs-1 col-sm-2 col-md-2 col-lg-3">
                <div className="right-column"></div>
                 <div className="discover-article-spotlight-leftcolumn">
                    <h3 className="discover-article-spotlight-header"></h3>
                    <p className="discover-article-spotlight-subheader">
                      The claim, made without any evidence, appeared to move the Saudis close to directly blaming Iran for attacks on oil facilities.
                    <br/>
                    <span className="discover-article-spotlight-metadata">4m ago 518 comments</span>
                    </p>
                  </div>

              </div>
            </div> 

            <div className="discover-main">
               <div className="discover-article-spotlight-leftcolumn">
                    <h3 className="discover-article-spotlight-header">Saudi Arabia Says Iranian Weapons Were Used in Strikes on Oil Facilities</h3>
                    <p className="discover-article-spotlight-subheader">
                      The claim, made without any evidence, appeared to move the Saudis close to directly blaming Iran for attacks on oil facilities.
                    <br/>
                    <span className="discover-article-spotlight-metadata">4m ago 518 comments</span>
                    </p>
                  </div>
                  <div className="discover-article-spotlight-leftcolumn">
                    <h3 className="discover-article-spotlight-header">Saudi Arabia Says Iranian Weapons Were Used in Strikes on Oil Facilities</h3>
                    <p className="discover-article-spotlight-subheader">
                      The claim, made without any evidence, appeared to move the Saudis close to directly blaming Iran for attacks on oil facilities.
                    <br/>
                    <span className="discover-article-spotlight-metadata">4m ago 518 comments</span>
                    </p>
                  </div>
                  <div className="discover-article-spotlight-leftcolumn">
                    <h3 className="discover-article-spotlight-header">Saudi Arabia Says Iranian Weapons Were Used in Strikes on Oil Facilities</h3>
                    <p className="discover-article-spotlight-subheader">
                      The claim, made without any evidence, appeared to move the Saudis close to directly blaming Iran for attacks on oil facilities.
                    <br/>
                    <span className="discover-article-spotlight-metadata">4m ago 518 comments</span>
                    </p>
                  </div>
            </div>






          </div>
        {/* </div> */}
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