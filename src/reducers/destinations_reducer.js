import { combineReducers } from 'redux';
import {ADD_DESTINATION, UPDATE_DESTINATION} from "../actions";

const initialDestinationsStateForTesting = {
    1: {
        id: 1,
        name: 'Columbus, OH',
        location: {
            lat: 39.9828671,
            lng: -83.1309112
        }
    },
    2: {
        id: 2,
        name: 'Seven Springs, PA',
        location: {
            lat: 40.0229768,
            lng: -79.2998919
        }
    },
    3: {
        id: 3,
        name: 'Philadelphia, PA',
        location: {
            lat: 40.0021607,
            lng: -75.3982109
        }
    },
    4: {
        id: 4,
        name: 'London',
        location: {
            lat: 51.528308,
            lng: -0.3817709
        }
    },
    5: {
        id: 5,
        name: 'Paris',
        location: {
            lat: 48.8230945,
            lng: 2.2307219
        }
    }
};

const byId = (state = initialDestinationsStateForTesting, action) => {
    switch(action.type) {
        case ADD_DESTINATION:
        case UPDATE_DESTINATION:
            return {
                ...state,
                [action.payload.destination.id]: Object.assign({}, state[action.payload.destination.id], action.payload.destination)
            }
        default:
            return state;
    }
};

const allDestinations = (state = [1, 2, 3, 4, 5], action) => {
    switch(action.type) {
        case ADD_DESTINATION:
            return [...state, action.payload.destination.id];
        default:
            return state;
    }
};

export default combineReducers({
    byId,
    allDestinations
});