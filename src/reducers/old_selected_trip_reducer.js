import {SELECT_TRIP, ADD_DESTINATION, UPDATE_DESTINATION, DELETE_DESTINATION} from '../actions'

const previousDestination = (state = {}, action) => {
    switch(action.type) {
        case ADD_DESTINATION:
            return Object.assign({}, state, {
                nextDestination: action.payload.id
            });
        default:
            return state
    }
};

const nextDestination = (state = {}, action) => {
    switch(action.type) {
        case ADD_DESTINATION:
            return Object.assign({}, state, {
                previousDestination: action.payload.id
            });
        default:
            return state
    }
};

const destinations = (state = {}, action) => {
    switch (action.type) {
        case ADD_DESTINATION:
            // Create new-state object to hold changes to previous destination and new destination
            let newDestinationState = {
                [action.payload.previousDestination]: previousDestination(state[action.payload.previousDestination], action),
                [action.payload.id]: destination(state[action.payload.id], action)
            };

            // update next destination by adding to new-state object, if needed
            if (action.payload.nextDestination) {
                newDestinationState[action.payload.nextDestination] = nextDestination(state[action.payload.nextDestination], action)
            }
            return Object.assign({}, state, newDestinationState);
        case UPDATE_DESTINATION:
            return Object.assign({}, state, {
                [action.payload.id]: destination(state[action.payload.id], action)
            });
        case DELETE_DESTINATION:
            // Get handles of current, previous, and next destinations, if they exist
            const destToDelete = state[action.payload];
            let prevDestToDelete = state[destToDelete.previousDestination]
                ? Object.assign({}, state[destToDelete.previousDestination])
                : null;
            let nextDestToDelete = state[destToDelete.nextDestination]
                ? Object.assign({}, state[destToDelete.nextDestination])
                : null;

            // Create new-state object to hold changes to previous and next destinations
            let deleteDestinationState = {};

            // Update previous and next destinations if they exist, and add changes to new-state object
            if (prevDestToDelete) {
                prevDestToDelete.nextDestination = nextDestToDelete ? nextDestToDelete.id : null;
                deleteDestinationState[prevDestToDelete.id] = prevDestToDelete;
            }
            if (nextDestToDelete) {
                nextDestToDelete.previousDestination = prevDestToDelete ? prevDestToDelete.id : null;
                deleteDestinationState[nextDestToDelete.id] = nextDestToDelete;
            }

            // Deconstruct destinations to remove current destination
            let {[destToDelete.id.toString()]: omit, ...newDestinations} = state;
            return Object.assign({}, newDestinations, deleteDestinationState);
        default:
            return state
    }
};

const destination = (state = {}, action) => {
    switch (action.type) {
        case ADD_DESTINATION:
            return action.payload;
        case UPDATE_DESTINATION:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}

export default (state = null, action) => {
    switch (action.type) {
        case SELECT_TRIP:
            return action.selectedTrip;
        case ADD_DESTINATION:
            return Object.assign({}, state, {
                firstDestination: state.firstDestination ? state.firstDestination : action.payload.id,
                lastDestination: action.payload.id,
                destinations: destinations(state.destinations, action)
            });
        case DELETE_DESTINATION:
            return Object.assign({}, state, {
                firstDestination: state.firstDestination === action.payload ? state.destinations[action.payload].nextDestination : state.firstDestination,
                lastDestination: state.lastDestination === action.payload ? state.destinations[action.payload].previousDestination : state.lastDestination,
                destinations: destinations(state.destinations, action)
            });
        case UPDATE_DESTINATION:
            return Object.assign({}, state, {
                destinations: destinations(state.destinations, action)
            });
        default:
            return state
    }
}