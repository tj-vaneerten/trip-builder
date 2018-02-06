import uuid from 'uuid/v1';
export const SELECT_TRIP = 'SELECT_TRIP';
export const ADD_DESTINATION = 'ADD_DESTINATION';
export const DIRECTIONS_FETCH_SUCCESSFULLY = 'DIRECTIONS_FETCH_SUCCESSFULLY';
export const SELECT_DESTINATION = 'SELECT_DESTINATION';
export const UPDATE_DESTINATION = 'UPDATE_DESTINATION';
export const DELETE_DESTINATION = 'DELETE_DESTINATION';
export const ADD_BUDGET_ITEM = 'ADD_BUDGET_ITEM';

const directionsFetchSuccessfully = directions =>  ({
    type: DIRECTIONS_FETCH_SUCCESSFULLY,
    payload: directions
});

const addDestinationSuccessfully = (tripId, destination) => ({
    type: ADD_DESTINATION,
    payload: {
        tripId,
        destination: {
            ...destination,
            id: uuid()
        }
    }
});

const selectTripSuccessfully = tripId => ({
    type: SELECT_TRIP,
    payload: tripId
});

const deleteDestinationSuccessfully = (tripId, destinationId) => ({
    type: DELETE_DESTINATION,
    payload: {tripId, destinationId}
});

// Given a list of destinations and a callback, will fetch directions
// from Google Maps and call the callback on response
const fetchDirectionsFromService = (destinations, callback) => {
    if (destinations.length >= 2) { // At least 2 destinations, request directions
        const directionsService = new window.google.maps.DirectionsService();
        const origin = destinations.shift();
        const lastDestination = destinations.pop();
        directionsService.route({
            origin: origin.location,
            destination: lastDestination.location,
            travelMode: 'DRIVING',
            waypoints: destinations.map(({location}) => ({
                location,
                stopover: true
            }))
        }, callback);
    } else {
        callback(null, 'OK');
    }
};

export const selectTrip = tripId => {
    return (dispatch, getState) => {
        dispatch(selectTripSuccessfully(tripId));

        const trip = getState().entities.trips.byId[getState().selectedTrip];
        if (trip) {
            let destinations = trip.destinations.map(destinationId => (getState().entities.destinations.byId[destinationId]));
            fetchDirectionsFromService(destinations, (result, status) => {
                if (status === 'OK') {
                    dispatch(directionsFetchSuccessfully(result));
                }
            });
        }
    };
};

export const addDestination = (tripId, destination) => {
	return (dispatch, getState) => {
	    dispatch(addDestinationSuccessfully(tripId, destination));

        const trip = getState().entities.trips.byId[getState().selectedTrip];
        let destinations = trip.destinations.map(destinationId => (getState().entities.destinations.byId[destinationId]));
        fetchDirectionsFromService(destinations, (result, status) => {
            if (status === 'OK') {
                dispatch(directionsFetchSuccessfully(result));
            }
        });
	};
};

export const deleteDestination = (tripId, destinationId) => {
    return (dispatch, getState) => {
        dispatch(deleteDestinationSuccessfully(tripId, destinationId));

        const trip = getState().entities.trips.byId[getState().selectedTrip];
        let destinations = trip.destinations.map(destinationId => (getState().entities.destinations.byId[destinationId]));
        fetchDirectionsFromService(destinations, (result, status) => {
            if (status === 'OK') {
                dispatch(directionsFetchSuccessfully(result));
            }
        });
    };
};

export const fetchDirections = () => {
    return (dispatch, getState) => {
        const trip = getState().entities.trips.byId[getState().selectedTrip];
        let destinations = trip.destinations.map(destinationId => (getState().entities.destinations.byId[destinationId]));
        fetchDirectionsFromService(destinations, (result, status) => {
            if (status === 'OK') {
                dispatch(directionsFetchSuccessfully(result));
            }
        });
    };
};

export const selectDestination = (destinationId) => ({
    type: SELECT_DESTINATION,
    payload: destinationId
});

export const updateDestination = destination => ({
    type: UPDATE_DESTINATION,
    payload: {destination}
});

export const addBudgetItem = budget => ({
    type: ADD_BUDGET_ITEM,
    payload: budget
});