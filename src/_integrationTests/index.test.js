import moxios, { requests } from "moxios";
import { testStore } from '../../Utils';
import { fetchPosts } from './../actions';

describe('fetchPosts action', () => {
    beforeEach(() => {
        moxios.install();
    })

    afterEach(() => {
        moxios.uninstall();
    })

    it('Store is updated correctly', () => {
        const expectedStore = [{
            title: 'Example test 1',
            body: 'some text'
        }, {
            title: 'Example test 2',
            body: 'some text'
        }, {
            title: 'Example test 3',
            body: 'some text'
        }];

        const store = testStore();
        // eslint-disable-next-line testing-library/await-async-utils
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedStore
            })
        });

        return store.dispatch(fetchPosts()).then(() => {
            const newStatus = store.getState();
            expect(newStatus.posts).toBe(expectedStore);
        })
    })
})