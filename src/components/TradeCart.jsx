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

export default class TradeCart extends React.Component {
  constructor(props) {
    // StartATrade is the parent component of the SkillStore
    super(props);
    // should be able to delete objects from cart
    this.state = {
      loading: false,
      // when we pass errors into setState, the new error object will replace the old one in the state object
    }
  }

  render() {
    const {skills} = this.props;
    const skillsList = skills.map(skill => {
      return (<Card>
        <CardBody>
          <li key={skill.id}>{skill.id}</li>
        </CardBody>
      </Card>)
    })
    return (<div className="TradeCart-Component">
      <Card>
        <CardBody>
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
              <CardTitle>trade cart</CardTitle>
            </FormGroup>
            <FormGroup>
              {skillsList}
            </FormGroup>
            <FormGroup>
              <Button color="success">Search for Trades</Button>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    </div>);
  }
}
