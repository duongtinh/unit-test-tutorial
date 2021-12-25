import { types } from "../../actions/types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
    switch (action.type) {
        case types.GET_POST:
            return action.payload;
        default:
            return state;
    }
}