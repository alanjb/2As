import React from 'react';
import Article from '../components/articles/Article';
import Enzyme, { shallow, mount, render} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import { findByTestAttr } from '../utils';

jest.mock('../components/assets/IndexButton');
let container, containerProp, childContainer, childContainerProps;
// console.log(component.debug());

const setUp = (props = {}) => {
  const component = shallow(<Article {...props} />); 
  return component; 
}

describe('Article Component', () => {
  let component;

  //run this function before each test
  beforeEach(() => {
    component = setUp();
  });
  

  it('should render without errors', () => {
    const attr = 'Article-Component';
    const wrapper = findByTestAttr(component, attr);
    expect(wrapper.length).toBe(1);
  }); 
});