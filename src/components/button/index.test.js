/* eslint-disable testing-library/await-async-query */
import React from 'react';
import { findByTestAttr, checkProps } from '../../../Utils/index';
import SharedButton from './index'
import { shallow } from 'enzyme';

describe('SharedButton component', () => {
    describe('Checking proptype', () => {
        it('Should not throw a warning', () => {
            const expectedProp = {
                buttonText: 'Example button text',
                emitEvent: () => {

                }
            };
            const propErr = checkProps(SharedButton, expectedProp);
            expect(propErr).toBeUndefined();
        })
    });

    describe('Renders', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                buttonText: 'Example button text',
                emitEvent: () => {

                }
            };
            wrapper = shallow(<SharedButton {...props} />)
        })

        it('Should render a button', () => {
            const button = findByTestAttr(wrapper, 'buttonComponent');
            expect(button.length).toBe(1);
        })
    })
});