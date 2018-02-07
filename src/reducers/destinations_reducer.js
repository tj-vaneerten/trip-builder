import { combineReducers } from 'redux';
import {ADD_BUDGET_ITEM, ADD_DESTINATION, DELETE_DESTINATION, UPDATE_DESTINATION} from "../actions";

const initialDestinationsStateForTesting = {
    1: {
        id: 1,
        name: 'Columbus, OH',
        location: {
            lat: 39.9828671,
            lng: -83.1309112
        },
        budgetItems: []
    },
    2: {
        id: 2,
        name: 'Seven Springs, PA',
        location: {
            lat: 40.0229768,
            lng: -79.2998919
        },
        budgetItems: []
    },
    3: {
        id: 3,
        name: 'Philadelphia, PA',
        location: {
            lat: 40.0021607,
            lng: -75.3982109
        },
        budgetItems: []
    },
    4: {
        id: 4,
        name: 'London',
        location: {
            lat: 51.528308,
            lng: -0.3817709
        },
        budgetItems: []
    },
    5: {
        id: 5,
        name: 'Paris',
        location: {
            lat: 48.8230945,
            lng: 2.2307219
        },
        budgetItems: []
    }
};

const byId = (state = initialDestinationsStateForTesting, action) => {
    switch(action.type) {
        case ADD_DESTINATION:
        case UPDATE_DESTINATION:
            return {
                ...state,
                [action.payload.destination.id]: Object.assign({}, state[action.payload.destination.id], action.payload.destination)
            };
        case DELETE_DESTINATION:
            return Object.keys(state).reduce((acc, key) => {
                if (key !== action.payload.destinationId) {
                    acc[key] = state[key];
                }
                return acc;
            }, {});
        case ADD_BUDGET_ITEM:
            const destination = state[action.payload.destinationId];
            return {
                ...state,
                [action.payload.destinationId]: {
                    ...destination,
                    budgetItems: destination.budgetItems.concat(action.payload.budgetItem.id)
                }
            };
        default:
            return state;
    }
};

const allDestinations = (state = [1, 2, 3, 4, 5], action) => {
    switch(action.type) {
        case ADD_DESTINATION:
            return [...state, action.payload.destination.id];
        case DELETE_DESTINATION:
            return state.filter(id => id !== action.payload.destinationId);
        default:
            return state;
    }
};

export default combineReducers({
    byId,
    allDestinations
});