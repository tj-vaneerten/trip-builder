export const SELECT_TRIP = 'SELECT_TRIP'
export const ADD_DESTINATION = 'ADD_DESTINATION'

// Creating full trip details just for testing purposes. Will come from API
const sbTrip = {
	id: 1,
	name: 'Snowboard trip',
	destinations: {
		1: {
			sequence: 1,
			name: 'Columbus, OH'
		},
		2: {
			sequence: 2,
			name: 'Seven Springs, PA'
		},
		3: {
			sequence: 3,
			name: 'Philadelphia, PA'
		}
	}
}

const euTrip = {
	id: 2,
	name: 'Eurpope trip',
	destinations: {
		1: {
			sequence: 1,
			name: 'London'
		},
		2: {
			sequence: 2,
			name: 'France'
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