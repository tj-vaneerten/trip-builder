import {SELECT_DESTINATION, SELECT_TRIP} from "../actions";

export default (state = null, action) => {
    switch(action.type) {
        case SELECT_DESTINATION:
            return action.selectedDestination;
        case SELECT_TRIP:
            return null;
        default:
            return state;
    }
};