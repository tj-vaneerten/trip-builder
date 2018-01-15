const createListOfDestinations = (trip) => {
    return trip.firstDestination && trip.destinations[trip.firstDestination]
        ? recursivelyCreateListOfDestinations(trip.destinations, trip.firstDestination)
        : [];
};

const recursivelyCreateListOfDestinations = (destinationObject, destinationId) => {
    const destination = destinationObject[destinationId];
    if (!destination.nextDestination) {
        return [destination];
    }
    const destinationList = recursivelyCreateListOfDestinations(destinationObject, destination.nextDestination);
    destinationList.unshift(destination);
    return destinationList;
};

export default createListOfDestinations;