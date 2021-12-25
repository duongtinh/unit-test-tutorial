import { types } from "../../actions/types";
import PostReducer from "./reducer";

describe('Posts Reducer', () => {
    it('Should return default state', () => {
        const newState = PostReducer(undefined, {});
        expect(newState).toEqual([]);
    })

    it('Should return new state if receiving type', () => {
        const posts = [{ title: 'test 1' }, { title: 'test 2' }, { title: 'test 3' }];
        const newState = PostReducer(undefined, {
            type: types.GET_POST,
            payload: posts
        });
        expect(newState).toEqual(posts);
    })
})