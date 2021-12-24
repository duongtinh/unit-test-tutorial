import React from "react";
import { shallow } from 'enzyme';
import Headline from "./index";
import { findByTestAttr, checkProps } from '../../../Utils/index';

const setUp = (props = {}) => {
    const component = shallow(<Headline {...props} />);
    return component;
}

describe('Headline Component', () => {
    describe('Checking PropTypes', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                header: 'test header',
                desc: 'test desc',
                tempArr: [{
                    fName: 'test fname',
                    lName: 'test lname',
                    email: 'test@gmail.com',
                    age: 32,
                    onlineStatus: false
                }]
            }

            const propError = checkProps(Headline, expectedProps);
            expect(propError).toBeUndefined();
        })
    })

    describe('Have props', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                header: 'Test Header',
                desc: 'Test Desc'
            }

            wrapper = setUp(props);
        })

        it('Should render without errors', () => {
            // eslint-disable-next-line testing-library/await-async-query
            const component = findByTestAttr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(1)
        })

        it('Should render a H1', () => {
            // eslint-disable-next-line testing-library/await-async-query
            const h1 = findByTestAttr(wrapper, 'header');
            expect(h1.length).toBe(1);
        })

        it('Should render a P', () => {
            // eslint-disable-next-line testing-library/await-async-query
            const desc = findByTestAttr(wrapper, 'desc');
            expect(desc.length).toBe(1);
        })
    })

    describe('Have no props', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        })

        it('Should not render', () => {
            // eslint-disable-next-line testing-library/await-async-query
            const component = findByTestAttr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(0);
        })
    })
})