import React from 'react';
import IndexButton from '../components/assets/IndexButton';
import Enzyme, { shallow, mount, render} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter });

/**
 * Initialize common properties to be passed
 * @param {*} props properies to be override
 */
function createTestProps(props) {
    return {
        ...props,
    };
}

let component, props;

beforeEach(() => {
    props = createTestProps();
    component = shallow(<IndexButton {...props} /> );
});

describe("IndexButton Component", () => {
    it('renders correctly in DOM', () => {
        shallow(
            <IndexButton text="Test" />
        );
    });

    it('expects to find an img HTML element in the DOM that represents the index button icon button and render it', () => {
        expect(component.find('img')).toHaveLength(1);
    });

    it('should be defined', () => {
        expect(IndexButton).toBeDefined();
    });

    it('should render a hamburger button', () => {
        const indexbuttonicon = component.find('.index-button');
        expect(indexbuttonicon.length).toBe(1);
        expect(component).toMatchSnapshot();
        // expect(mockToggleIndexSidePanelCallBack.mock.calls.length).toEqual(1);
    });

    it('should call the onClick function when index button is clicked', () => {
        const mockToggleIndexSidePanelCallBack = jest.fn(); 
        component.instance().toggleIndexSidePanel = mockToggleIndexSidePanelCallBack;
        component.find()
        expect(mockToggleIndexSidePanelCallBack).toHaveBeenCalled(1);
        const indexbuttonicon = component.find('.index-button');
        indexbuttonicon.first().props().onClick();
    });
});