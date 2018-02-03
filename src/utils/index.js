export const createListOfDestinations = (trip) => {
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

// Given a list of destinations and the directions object from
// Google maps, returns a list of timeline items
export const createListOfTimelineItems = (destinations, directions) => {
    let timelineList = [];
    let previousLeg = null;
    destinations.forEach((destination, index) => {
        const leg = directions && directions.routes && directions.routes[0] && directions.routes[0].legs ? directions.routes[0].legs[index] : null;

        timelineList.push({
            type: 'DESTINATION',
            destinationId: destination.id,
            name: destination.name,
            address: leg ? leg.start_address
                : previousLeg ? previousLeg.end_address
                    : null
        });

        if (leg) {
            timelineList.push({
                type: 'TRANSIT',
                duration: leg.duration.text
            });
        }

        previousLeg = leg;
    });
    return timelineList;
};