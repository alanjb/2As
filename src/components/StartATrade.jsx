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
import ItemForm from './ItemForm';
// import TradeCart from './TradeCart';
// import TradeSettings from './TradeSettings';

export default class StartATrade extends React.Component {
  constructor(props) {
    super(props);
    // have one giant Trade object with array properties for skills, items

    // this.updateTradeArray = this.updateTradeArray.bind(this);
    // this.submitButtonClicked = this.submitButtonClicked.bind(this);
    this.state = {
      objectsInTradeArray: [],
      skillButtonOn: true,
      itemButtonOn: false,
      loading: false
    };
  }

  // updateTradeArray = (newSkillObject) => {
  //   // ADD NEW TRADE OBJECT TO START A TRADE array
  //   // const {objectsInTradeArray} = this.state;
  //   console.log(newSkillObject.description)
  //   this.setState(prevState => ({
  //     objectsInTradeArray: [
  //       ...prevState.objectsInTradeArray,
  //       newSkillObject
  //     ]
  //   }));
  //   console.log(this.state.objectsInTradeArray);
  //   alert(this.state.objectsInTradeArray.length);
  // }



  // updateTradeArray = (newSkill) => {
  //
  //   // objectsInTrade.push(newSkill);
  //   //  this.setState({
  //   //    objectsInTrade: this.state.objectsInTrade.push(newSkill)
  //   //  })
  //   // alert(objectsInTrade[0]);
  // }
  //
  // submitButtonClicked = (event) => {
  //      when submit button is clicked,
  //   this.setState({
  //     skillButtonOn: true,
  //     itemButtonOn: false
  //   });
  //    alert('Skill' + this.state.skillButtonOn);
  // }
  //
  // itemButtonClicked = (event) => {
  //      when submit button is clicked,
  //   this.setState({
  //     skillButtonOn: false,
  //     itemButtonOn: true
  //   });
  //   alert('Item' + this.state.itemButtonOn);
  // }

  // DEFAULT IS Add Skill Form
  render() {
    // const { trade } = this.state;
    return (<div className="StartATrade-Component">
      <Card>
        <Container>
          <CardBody>
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
              <div className="StartATrade-Form">
                <SkillsStore updateTradeArray={this.updateTradeArray}/> {/* <ItemForm isOn={this.state.itemButtonOn}/> */}
              </div>
            </Form>
          </CardBody>
        </Container>
      </Card>
      {/* <TradeCart />
        <TradeSettings /> */
      }
    </div>);
  }
}
