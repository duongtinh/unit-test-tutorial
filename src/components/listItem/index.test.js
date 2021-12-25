import React from "react";
import ListItem from "./index";

import { findByTestAttr, checkProps } from "../../../Utils";
import { shallow } from "enzyme";

const setUp = (props) => {
    const component = shallow(<ListItem {...props} />);
    return component;
}

describe('ListItem Component', () => {
    describe('checking PropTypes', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                title: 'test title',
                desc: 'test desc'
            }
            const propErr = checkProps(ListItem, expectedProps);
            expect(propErr).toBeUndefined();
        })
    });

    describe('Component render', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                title: 'test title',
                desc: 'test desc'
            }
            wrapper = setUp(props);
        })
        it('Should render withot error', () => {
            // eslint-disable-next-line testing-library/await-async-query
            const component = findByTestAttr(wrapper, 'listItemComponent');
            expect(component.length).toBe(1);
        })
        it('Should render a title', () => {
            // eslint-disable-next-line testing-library/await-async-query
            const title = findByTestAttr(wrapper, 'componentTitle');
            expect(title.length).toBe(1);
        })
        it('should render a desc', () => {
            // eslint-disable-next-line testing-library/await-async-query
            const desc = findByTestAttr(wrapper, 'componentDesc');
            expect(desc.length).toBe(1);
        })
    })

    describe('Should NOT render', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                desc: 'Some text'
            }
            wrapper = shallow(<ListItem {...props} />)
        })

        it('Component is not render', () => {
            // eslint-disable-next-line testing-library/await-async-query
            const component = findByTestAttr(wrapper, 'listItemComponent');
            expect(component.length).toBe(0);
        })
    })

})