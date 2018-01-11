import { SELECT_TRIP, ADD_DESTINATION } from '../actions'

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
}

const destinations = (state = {}, action) => {
	switch (action.type) {
		case ADD_DESTINATION:
		    let newDestinationState = {
                [action.payload.previousDestination]: previousDestination(state[action.payload.previousDestination], action),
                [action.payload.id]: action.payload
            };
            if (action.payload.nextDestination) {
                newDestinationState[action.payload.nextDestination] = nextDestination(state[action.payload.nextDestination], action)
            }
            return Object.assign({}, state, {
                [action.payload.previousDestination]: previousDestination(state[action.payload.previousDestination], action),
                [action.payload.id]: action.payload
            });

		default:
			return state
	}
}

export default (state = null, action) => {
    switch (action.type) {
        case SELECT_TRIP:
            return action.selectedTrip;
        case ADD_DESTINATION:
        	return Object.assign({}, state, {
        		lastDestination: action.payload.id,
        		destinations: destinations(state.destinations, action)
        	});
        default:
            return state
    }
}