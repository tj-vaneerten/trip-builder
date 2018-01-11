import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DestinationForm from './DestinationForm'

class TripDetails extends Component {

    static createListOfDestinations(trip) {

        return trip.destinations[trip.firstDestination] ? TripDetails.recursivelyCreateListOfDestinations(trip.destinations, trip.firstDestination) : [];
    }

    static recursivelyCreateListOfDestinations(destinationObject, destinationId) {
        const destination = destinationObject[destinationId];
        if (!destination.nextDestination) {
            return [destination];
        }
        const destinationList = TripDetails.recursivelyCreateListOfDestinations(destinationObject, destination.nextDestination);
        destinationList.unshift(destination);
        return destinationList;
    }

    render() {
        const trip = this.props.selectedTrip;

        if (trip) {
            return (
                <div>
                    <h3>{trip.name}</h3>
                    <DestinationForm lastDestination={trip.lastDestination} addDestination={this.props.addDestination} />
                    <ul>
                        {TripDetails.createListOfDestinations(trip).map((destination) => (
                            <li key={destination.id}>{destination.name}</li>
                        ))}
                    </ul>
                </div>
            )
        }

        return (
            <p>No trip selected</p>
        )
    }

}

TripDetails.propTypes = {
    selectedTrip: PropTypes.object
}

export default TripDetails