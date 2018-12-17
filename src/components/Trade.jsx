import React from 'react';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  CardSubtitle,
  Row,
  Col,
  CardBody
} from 'reactstrap';
import {Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import classnames from 'classnames';
import {Container} from 'reactstrap';
import {InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';
import SkillsStore from './SkillsStore';
// import ItemStore from './ItemStore';
import TradeCart from './TradeCart';
import TradeSettings from './TradeSettings';

export default class StartATrade extends React.Component {
  constructor(props) {
    super(props);
    // this.updateTradeArray = this.updateTradeArray.bind(this);
    // this.submitButtonClicked = this.submitButtonClicked.bind(this);
    this.state = {
      skills: [],
      items: [],
      skillButtonOn: true,
      itemButtonOn: false,
      loading: false
    };
  }

  handleSubmit = (skillObject) => {
    this.setState(prevState => ({
      skills: [
        ...prevState.skills,
        skillObject
      ]
    }));
  }

  render() {
    const {trade} = this.state;
    return (<div className="Trade-Component">
      <Container>
        <Form onSubmit={this.onSubmit}>
          <div className='StartATrade-Header'>
            <CardTitle>start a trade</CardTitle>
            <CardSubtitle>put together a trade and find someone to trade with</CardSubtitle>
            <FormGroup>
              {/* <button id="1" onClick="reply_click(this.id)">B1</button> */}
              <Button name="skillButton" id="skillButton" className="Button-Component" color="primary" onClick={this.submitButtonClicked}>add skill</Button>
              <Button name="itemButton" color="danger" className="Button-Component" onClick={this.itemButtonClicked}>add item</Button>
              {/* <Button name="cryptoButton" color="warning" onClick={this.tradeButtonsClicked}>add cryptocurrency</Button> */}
            </FormGroup>
          </div>
          <div className="SkillStore-Component">
            <SkillsStore handleSkills={this.handleSubmit}/> {/* <ItemForm isOn={this.state.itemButtonOn}/> */}
          </div>
        </Form>
      </Container>
      {/*  */}
      <TradeCart skills={this.state.skills}/> {/*  */}
      <TradeSettings/>
    </div>);
  }

  componentDidUpdate(prevState, prevProps, snapshot) {
    // console.log("NEW TRADE ARRAY: ");
    // console.log(this.state.skills);
  }
}
