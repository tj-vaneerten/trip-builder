export const SELECT_TRIP = 'SELECT_TRIP'
export const ADD_DESTINATION = 'ADD_DESTINATION'

// Creating full trip details just for testing purposes. Will come from API
const sbTrip = {
	id: 1,
	name: 'Snowboard trip',
    firstDestination: 1,
    lastDestination: 3,
	destinations: {
		1: {
		    id: 1,
			name: 'Columbus, OH',
            previousDestination: null,
            nextDestination: 2
		},
		2: {
		    id: 2,
			name: 'Seven Springs, PA',
            previousDestination: 1,
            nextDestination: 3
		},
		3: {
		    id: 3,
			name: 'Philadelphia, PA',
            previousDestination: 2,
            nextDestination: null
		}
	}
}

const euTrip = {
	id: 2,
	name: 'Europe trip',
    firstDestination: 1,
    lastDestination: 2,
	destinations: {
		1: {
		    id: 1,
			name: 'London',
            previousDestination: null,
            nextDestination: 2
		},
		2: {
		    id: 2,
			name: 'France',
            previousDestination: 1,
            nextDestination: null
		}
	}
}

const tripDetails = {
	1: sbTrip,
	2: euTrip
}
// ------------------------

export const selectTrip = (trip) => {
	const selectedTrip = tripDetails[trip] ? tripDetails[trip] : null
    return {
        type: SELECT_TRIP,
        selectedTrip: selectedTrip
    }

}

export const addDestination = (destination) => {
	return {
		type: ADD_DESTINATION,
		payload: destination
	}
}