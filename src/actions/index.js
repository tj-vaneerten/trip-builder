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
			location: {
		    	lat: 39.9828671,
				lng: -83.1309112
			},
            previousDestination: null,
            nextDestination: 2
		},
		2: {
		    id: 2,
			name: 'Seven Springs, PA',
            location: {
                lat: 40.0229768,
                lng: -79.2998919
            },
            previousDestination: 1,
            nextDestination: 3
		},
		3: {
		    id: 3,
			name: 'Philadelphia, PA',
            location: {
                lat: 40.0021607,
                lng: -75.3982109
            },
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
            location: {
                lat: 51.528308,
                lng: -0.3817709
            },
            previousDestination: null,
            nextDestination: 2
		},
		2: {
		    id: 2,
			name: 'Paris',
            location: {
                lat: 48.8230945,
                lng: 2.2307219
            },
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