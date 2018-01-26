import { createListOfDestinations } from '../utils';

export const SELECT_TRIP = 'SELECT_TRIP';
export const ADD_DESTINATION = 'ADD_DESTINATION';
export const DIRECTIONS_FETCH_SUCCESSFULLY = 'DIRECTIONS_FETCH_SUCCESSFULLY';
export const SELECT_DESTINATION = 'SELECT_DESTINATION';

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

const newTrip = {
	id: 3,
	name: 'New Trip',
	firstDestination: null,
	lastDestination: null,
	destinations: {}
}

const tripDetails = {
	1: sbTrip,
	2: euTrip,
	3: newTrip
};
// ------------------------

const fetchDirectionsFromService = (trip, callback) => {
    let listOfDestinations = createListOfDestinations(trip);
    if (listOfDestinations.length >= 2) { // At least 2 destinations, request directions
        const directionsService = new window.google.maps.DirectionsService();
        const origin = listOfDestinations.shift();
        const lastDestination = listOfDestinations.pop();
        directionsService.route({
            origin: origin.location,
            destination: lastDestination.location,
            travelMode: 'DRIVING',
            waypoints: listOfDestinations.map(({location}) => ({
                location,
                stopover: true
            }))
        }, callback);
    }
};

export const selectTrip = trip => {
    return (dispatch, getState) => {
        dispatch(selectTripSuccessfully(trip));
        if (getState().selectedTrip) {
            fetchDirectionsFromService(getState().selectedTrip, (result, status) => {
                if (status === 'OK') {
                    dispatch(directionsFetchSuccessfully(result));
                }
            });
        }
    };
};

export const fetchDirections = () => {
    return (dispatch, getState) => {
        fetchDirectionsFromService(getState().selectedTrip, (result, status) => {
            if (status === 'OK') {
                dispatch(directionsFetchSuccessfully(result));
            }
        });
    };
};

export const addDestination = (destination) => {
	return (dispatch, getState) => {
	    dispatch(addDestinationSuccessfully(destination));

        fetchDirectionsFromService(getState().selectedTrip, (result, status) => {
            if (status === 'OK') {
                dispatch(directionsFetchSuccessfully(result));
            }
        });
	};
};

const directionsFetchSuccessfully = directions =>  ({
    type: DIRECTIONS_FETCH_SUCCESSFULLY,
    payload: directions
});

const addDestinationSuccessfully = destination => ({
    type: ADD_DESTINATION,
    payload: destination
});

const selectTripSuccessfully = trip => ({
    type: SELECT_TRIP,
    selectedTrip: tripDetails[trip] ? tripDetails[trip] : null
});

export const selectDestination = destination => ({
    type: SELECT_DESTINATION,
    selectedDestination: destination
});