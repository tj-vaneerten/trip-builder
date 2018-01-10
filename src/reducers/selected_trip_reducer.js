import { SELECT_TRIP, ADD_DESTINATION } from '../actions'

const destinations = (state = {}, action) => {
	switch (action.type) {
		case ADD_DESTINATION:
			return Object.assign({}, state, {
				[action.payload.sequence]: action.payload
			})
		default:
			return state
	}
}

export default (state = null, action) => {
    switch (action.type) {
        case SELECT_TRIP:
            return action.selectedTrip
        case ADD_DESTINATION:
        	return Object.assign({}, state, {
        		destinations: destinations(state.destinations, action)
        	})
        default:
            return state
    }
}