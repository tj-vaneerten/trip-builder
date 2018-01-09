export const SELECT_TRIP = 'SELECT_TRIP'

// Creating full trip details just for testing purposes. Will come from API
const sbTrip = {
	id: 1,
	name: 'Snowboard trip',
	destinations: {
		1: {
			id: 1,
			name: 'Columbus, OH',
			isStartingPoint: true
		},
		2: {
			id: 2,
			name: 'Seven Springs, PA',
			isStartingPoint: false
		},
		3: {
			id: 3,
			name: 'Philadelphia, PA',
			isStartingPoint: false
		}
	}
}

const euTrip = {
	id: 2,
	name: 'Eurpope trip',
	destinations: {
		1: {
			id: 1,
			name: 'London',
			isStartingPoint: true
		},
		2: {
			id: 2,
			name: 'France',
			isStartingPoint: false
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