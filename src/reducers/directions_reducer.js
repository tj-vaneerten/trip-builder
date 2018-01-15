import { DIRECTIONS_FETCH_SUCCESSFULLY } from "../actions";

export default (state = null, action) => {
    switch (action.type) {
        case DIRECTIONS_FETCH_SUCCESSFULLY:
            return action.payload;
        default:
            return state;

    }
};