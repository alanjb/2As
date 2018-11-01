import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class Home extends React.Component {
  
  constructor(props) {
    super(props);
      this.state = {

      }
  }
  componentWillMount() {
    // generate new city to display in search bar


      this.setState({

      });
  };

  render() {
    return (
        <div className="Home">
          <Container>
            <div className="main_area">
              <h1 className="header">ZAS HOME</h1>
              <h2 className="subheading">check it out</h2>
              <div className="SearchArea">
                {/* <MainSearchBar placeholder={this.state.placeholder} /> */}
              </div>
              <div className="Featured-area">
                <h1 className="header" id="Featured-heading">Featured Members</h1>

                <div className="CardDeckArea">
                </div>
              </div>
            </div>
          </Container>
      </div>
    )
  }
}
