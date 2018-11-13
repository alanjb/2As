import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
// import ExploreButton from './ExploreButton';


const InputExampleInput = props => (
  <InputGroup>
    <Input placeholder={props.placeholder} />
    <InputGroupAddon addonType="append">
      {/* <ExploreButton /> */}
    </InputGroupAddon>
  </InputGroup>
);

export default InputExampleInput;
