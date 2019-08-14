import React from "react";
import SampleImage from "../../components/assets/SampleImage";
import ArticleIndexBarComponent from "../layout/ArticleIndexBarComponent";
import ArticleBannerComponent from "../layout/ArticleBannerComponent";
import ArticleToolBar from "../layout/ArticleToolBarComponent";
import Info from "../../components/assets/InfoButton";
import NewArticle from "../../components/assets/NewArticle";
import EditArticle from "../../components/assets/EditArticle";
import Bookmark from "../../components/assets/Bookmark";
import Card from "../../components/layout/Card";
import EditButtonMobile from "../assets/EditButtonMobile";
import Table from "../../components/layout/Table";

export default class Article extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="articledetails-container">
        <div className="TitleArea">
          <h1 className="article-title">
            USCENTCOM Medical Security Cooperation (MSC) Exchange
          </h1>
        </div>
        <div className="SectionArea">
          <div className="tab">
            <h3 className="tab-option tab-1 tab-selected">Articles</h3>
            {/* <h3 className="tab-option tab-2">Details</h3>
            <h3 className="tab-option tab-3">Metrics</h3> */}
            <div className="tab-underline" />
            <hr className="tab-line" />
          </div>
        </div>
        {/*
        <h2 className="details-articles-tab-subtitle">MAIN ARTICLE</h2>
        <Card />
        <br />
        <h2 className="details-articles-tab-subtitle">ARTICLES</h2>
        <div className="Card-Area">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        */}
      
        <div className="row">

          <div className="col-sm-12 col-lg-6">
            <h1 className="details-tab-title">Details</h1>
            <h2 className="details-tab-subtitle">description</h2>
            <p className="details-tab-paragraph">
              This conference aims to "strengthen relationships and enhance
              capabilities between senior military medical leaders from across
              the U.S. Central Command (USCENTCOM) area of responsibility while
              focusing on the critical role of health in sustaining national and
              regional stability.
            </p>

            <h2 className="details-tab-subtitle">status</h2>
            <p className="details-tab-paragraph">Approved</p>

            <h2 className="details-tab-subtitle">hidden</h2>
            <p className="details-tab-paragraph">No</p>

            <h2 className="details-tab-subtitle">requested by</h2>
            <p className="details-tab-paragraph">John Smith on Nov 9, 2018</p>

            <h2 className="details-tab-subtitle">approved by</h2>
            <p className="details-tab-paragraph">Jim Johnson on Apr 15, 2019</p>
          </div>
          <div>
          
            {/*Members Table*/}
            <div className="col-sm-12 col-lg-6">
              <h1 className="details-tab-title">Members</h1>
              <Table/>
            </div>
          </div>
        </div>
        <EditButtonMobile />
      </div>
    );
  }
}
