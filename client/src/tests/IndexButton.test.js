import React from 'react';
import IndexButton from '../components/assets/IndexButton';
import Enzyme, { shallow, mount, render} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";

// https://docs.reactioncommerce.com/docs/next/react-testing

// https://www.asapdevelopers.com/mock-function-react-jest-enzyme/

Enzyme.configure({ adapter: new Adapter });
const mockToggleIndexSidePanel = jest.fn(); 

describe("IndexButton Component", () => {
    it('should render a hamburger button', () => {
        const component = shallow(<IndexButton/>);
        const indexbuttonicon = component.find('.index-button');
        expect(indexbuttonicon.length).toBe(1);
    });
});

// describe("IndexButton user interactions", () => {
//     it('toggles nav panel', () => {      
//         const indexbutton = wrapper.find('img');
//         console.log(indexbutton)
//         indexbutton.simulate('click');
//         expect(mockToggleIndexSidePanel).toHaveBeenCalled();
//     });
// }); 