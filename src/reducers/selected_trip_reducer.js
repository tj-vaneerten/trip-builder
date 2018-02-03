import {SELECT_TRIP} from "../actions";

export default (state = null, action) => {
    switch(action.type) {
        case SELECT_TRIP:
            return action.payload;
        default:
            return state;
    }
}