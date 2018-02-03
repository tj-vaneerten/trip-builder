import {ADD_DESTINATION, DELETE_DESTINATION, SELECT_DESTINATION, SELECT_TRIP} from "../actions";

export default (state = null, action) => {
    switch(action.type) {
        case SELECT_DESTINATION:
            return action.selectedDestination;
        case ADD_DESTINATION:
        case SELECT_TRIP:
        case DELETE_DESTINATION:
            return null;
        default:
            return state;
    }
};