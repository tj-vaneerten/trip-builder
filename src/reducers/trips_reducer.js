import { combineReducers } from 'redux';
import {ADD_DESTINATION, DELETE_DESTINATION} from "../actions";

const initialTripsByIdForTesting = {
    1: {
        id: 1,
        name: 'Snowboard trip',
        destinations: [1, 2, 3]
    },
    2: {
        id: 2,
        name: 'Europe trip',
        destinations: [4, 5]
    },
    3: {
        id: 3,
        name: 'New Trip',
        destinations: []
    }
};

const byId = (state = initialTripsByIdForTesting, action) => {
    switch(action.type) {
        case ADD_DESTINATION:
            const trip = state[action.payload.tripId];
            return {
                ...state,
                [action.payload.tripId]: {
                    ...trip,
                    destinations: trip.destinations.concat(action.payload.destination.id)
                }
            };
        /*
        case DELETE_DESTINATION:
            const trip = state[action.payload.tripId];
            return {
                ...state,
                [action.payload.tripId]: {
                    ...trip,
                    destinations:
                }
            };
        */
        default:
            return state;
    }
};

const allTrips = (state = [1, 2, 3], action) => {
    return state;
};

export default combineReducers({
    byId,
    allTrips
});