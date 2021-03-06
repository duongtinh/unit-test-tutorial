import App from './App';
import { shallow } from 'enzyme';
import { findByTestAttr, testStore } from '../Utils';
import React from 'react';

const setUp = (initialState = {}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<App store={store} />).childAt(0).dive();
    // eslint-disable-next-line testing-library/no-debugging-utils
    return wrapper;
}

describe('App component', () => {
    let wrapper;
    beforeEach(() => {
        const initialState = {
            posts: [
                {
                    title: 'Example test 1',
                    body: 'Some text'
                }, {
                    title: 'Example test 2',
                    body: 'Some text'
                }, {
                    title: 'Example test 3',
                    body: 'Some text'
                }]
        };
        wrapper = setUp(initialState);
    })

    it('Should render withot errors', () => {
        // eslint-disable-next-line testing-library/await-async-query
        const component = findByTestAttr(wrapper, 'AppComponent');
        expect(component.length).toBe(1);
    })

    it('exampleMethod_updateState method should update as expected', () => {
        const classInstance = wrapper.instance();
        classInstance.exampleMethod_updateState();
        const newState = classInstance.state.hideBtn;
        expect(newState).toBe(true)
    })

    it('exampleMethod_returnsAValue method should return a value as expected', () => {
        const classInstance = wrapper.instance();
        const newValue = classInstance.exampleMethod_returnsAValue(6);
        expect(newValue).toBe(7);
    })
})