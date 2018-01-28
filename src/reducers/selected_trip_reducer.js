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
		    let newDestinationState = {
                [action.payload.previousDestination]: previousDestination(state[action.payload.previousDestination], action),
                [action.payload.id]: destination(state[action.payload.id], action)
            };
            if (action.payload.nextDestination) {
                newDestinationState[action.payload.nextDestination] = nextDestination(state[action.payload.nextDestination], action)
            }
            return Object.assign({}, state, newDestinationState);
        case UPDATE_DESTINATION:
            return Object.assign({}, state, {
                [action.payload.id]: destination(state[action.payload.id], action)
            });
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
        case DELETE_DESTINATION:
        	return Object.assign({}, state, {
        	    firstDestination: state.firstDestination ? state.firstDestination : action.payload.id,
        		lastDestination: action.payload.id,
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