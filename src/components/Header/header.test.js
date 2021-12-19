import React from "react";
import { shallow } from "enzyme";
import Header from "./index";
import { findByTestAttr } from '../../../Utils/index';

const setUp = (props = {}) => {
    const component = shallow(<Header {...props} />)
    return component;
}

describe('Header component', () => {
    let component;
    beforeEach(() => {
        component = setUp();
    })
    it('should be render without error', () => {
        // eslint-disable-next-line testing-library/await-async-query
        const wrapper = findByTestAttr(component, 'headerComponent');
        expect(wrapper.length).toBe(1)
    })

    it('should render the logo', () => {
        // eslint-disable-next-line testing-library/await-async-query
        const logo = findByTestAttr(component, 'logoIMG');
        expect(logo.length).toBe(1);
    })
})
